import * as React from 'react';
import styles from './OrganigramaMxWebPart.module.scss';
import { IOrganigramaMxWebPartProps } from './IOrganigramaMxWebPartProps';
import OrganizationalChart from "./orgChart";
import employees from "../assets/data";
import * as ReactDOM from 'react-dom';
//import { Canvg } from 'canvg';

export default class OrganigramaMxWebPart extends React.Component<IOrganigramaMxWebPartProps, {}> {

  private findGlobalDepartment(id: number){
    var emp = employees.filter(function (el) {
        return el.id === id
      });
    
    let aux = emp[0];
    
    while(aux.parentId !== 0){
      var aux2 = employees.filter(function (el) {
        return el.id === aux.parentId
      });
      
      aux = aux2[0];
    }
    
    return aux.department;
  }

  private updateDList(){

    let gDepartmentList = employees.map(({ globalDepartment }) => globalDepartment);
    let uniqueDepartments = Array.from(new Set(gDepartmentList))
    let sortedUniqueDepartments = uniqueDepartments.sort();
  
    var picklist = (document.getElementById("departmentList") as HTMLSelectElement);
    
    var i, L = picklist.options.length - 1;
    for(i = L; i >= 0; i--) {
      picklist.remove(i);
    }
    
    var opt = document.createElement("option");
    opt.text = " --- Filter Department --- "
    picklist.add(opt);
    
    for (var j = 0; j < sortedUniqueDepartments.length; j++) {
      if (sortedUniqueDepartments[j] !== undefined && sortedUniqueDepartments[j] !== ""){
        var opt = document.createElement("option");
        opt.text = sortedUniqueDepartments[j];
        picklist.add(opt);
      }
    }
  
  }

  private updateEList(){

    let gEmpList = employees.map(({ name }) => name);
    let uniqueEmps = Array.from(new Set(gEmpList))
    let sortedUniqueEmps = uniqueEmps.sort();
  
    var picklist = (document.getElementById("empList") as HTMLSelectElement);
    
    var i, L = picklist.options.length - 1;
    for(i = L; i >= 0; i--) {
      picklist.remove(i);
    }
    
    var opt = document.createElement("option");
    opt.text = " --- Filter Employee --- "
    picklist.add(opt);
    
    for (var j = 0; j < sortedUniqueEmps.length; j++) {
      if (sortedUniqueEmps[j] !== undefined && sortedUniqueEmps[j] !== ""){
        var opt = document.createElement("option");
        opt.text = sortedUniqueEmps[j];
        picklist.add(opt);
      }
    }
  
  }

  private departmentFilter(filter: string) {
    
    let departmentList = employees.map(({ globalDepartment }) => globalDepartment)
    
    if (departmentList.includes(filter)){
      var employees_filtered = employees.filter(function (el) {
        var nodeRoot = employees.filter(obj => {
          return obj.name === ''
        })
          
        nodeRoot[0].globalDepartment = filter
        nodeRoot[0].id = 0
        
        return el.globalDepartment === filter
      });
      
      this.new_render(employees_filtered);
    }
  };

  private employeeFilter(filter: string) {

    let employeeList = employees.map(({ name }) => name);
    
    if (employeeList.includes(filter) && filter !== ''){
      
      var employeeNode = employees.filter(obj => {
            return obj.name === filter
      })
      
      let d = employeeNode[0].globalDepartment;
      
      var employees_filtered = employees.filter(function (el) {
          var nodeRoot = employees.filter(obj => {
            return obj.name === ''
          })
            
          nodeRoot[0].globalDepartment = d
          nodeRoot[0].id = 0
          
          return el.globalDepartment === d
        });
      
      this.new_render(employees_filtered);
    }
  };

  private home(){
    this.new_render(employees);
  }

  public render(): React.ReactElement<IOrganigramaMxWebPartProps> {
    /*
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;
    */

    for (var i = 0; i < employees.length; i++) {
      if (employees[i].id !== 0){
        let d = this.findGlobalDepartment(employees[i].id);
        employees[i].globalDepartment = d;
      }
    }

    return (
      <div id={styles.container}>
        <div id={styles.home} onClick = {() => this.home()}/>
        <form id={styles.formPicklist}>  
          <select id = "departmentList" onChange = {() => this.departmentFilter((document.getElementById("departmentList") as HTMLSelectElement).options[(document.getElementById("departmentList") as HTMLSelectElement).selectedIndex].text)} onClick = {() => this.updateDList()}>  
          <option> --- Filter Department --- </option>
          </select>
        </form>
        <form id={styles.formPicklistEmp}>  
          <select id = "empList" onChange = {() => this.employeeFilter((document.getElementById("empList") as HTMLSelectElement).options[(document.getElementById("empList") as HTMLSelectElement).selectedIndex].text)} onClick = {() => this.updateEList()}>  
          <option> --- Filter Employee --- </option>
          </select>
        </form>
        <OrganizationalChart data={employees} />
        <img id={styles.background} src={require("../assets/organograma_novo.png")} alt="Braskem" />
        <div id={styles.pdf} onClick = {() => this.generatePDF()}/>
      </div>
    );
  }

  private new_render(employees: any) {
    const container = document.getElementsByClassName("org-chart")[0];
    ReactDOM.render(<OrganizationalChart data={employees}/>, container);
  }

  private generatePDF(){
    /*var svg = document.querySelector('svg').innerHTML;

    if (svg){
      svg = svg.replace(/\r?\n|\r/g, '').trim();
    }

    let canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    var v = Canvg.from(ctx, svg);

    let imgData = canvas.toDataURL('image/png');
    console.log(imgData);*/
  }

}
