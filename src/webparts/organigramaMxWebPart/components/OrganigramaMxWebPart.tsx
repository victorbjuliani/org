import * as React from 'react';
import styles from './OrganigramaMxWebPart.module.scss';
import { IOrganigramaMxWebPartProps } from './IOrganigramaMxWebPartProps';
import OrganizationalChart, {chart} from "./orgChart";
import employees from "../assets/data_prd";
import * as ReactDOM from 'react-dom';

export default class OrganigramaMxWebPart extends React.Component<IOrganigramaMxWebPartProps, {}> {

  private orderEmployees( a: any, b: any) {
    if ( a.order_id < b.order_id ){
      return -1;
    }
    if ( a.order_id > b.order_id ){
      return 1;
    }
    return 0;
  }

  private findGlobalDepartment(id: number){
    //console.log(id);
    var emp = employees.filter(function (el) {
        return el.id === id
      });
    
    let aux = emp[0];
    
    while(aux.parentId !== 0 && aux.parentId !== 999999 && aux.parentId !== 1049){
      var aux2 = employees.filter(function (el) {
        return el.id === aux.parentId
      });
      
      aux = aux2[0];
    }
    
    return aux.department;
  }//1049

  private updateDList(){

    let isGlobal = (document.getElementById('global-org') as HTMLInputElement).checked;
    if (isGlobal){
      this.updateDListGlobal();
    } else{
      this.updateDListLocal();
    }
  
  }

  private updateDListGlobal(){

    var sortedUniqueDepartments = ['CALIDAD (GLOBAL)','MRO, SERVICIOS Y ALMACÉN (GLOBAL)','COMPLIANCE (GLOBAL)','MEJORA CONTINUA (GLOBAL)','LABORATORIO ANALITICA AVANZADA Y APLICACIONES (GLOBAL)','MATERIA PRIMA Y SUMINISTRO (GLOBAL)','TECNOLOGÍAS DE LA INFORMACIÓN (GLOBAL)','INTELIGENCIA Y DESARROLLO DE PROVEDORES (GLOBAL)','INTELIUS (GLOBAL)'];
    /*
    let gDepartmentList = employees.map(({ globalDepartment }) => globalDepartment);
    let uniqueDepartments = Array.from(new Set(gDepartmentList))
    let sortedUniqueDepartments = uniqueDepartments.sort();
    */

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

  private updateDListLocal(){

    var sortedUniqueDepartments = ['INDUSTRIAL (MÉXICO)','COMERCIAL (MÉXICO)','FINANZAS (MÉXICO)','SUSTENTABILIDAD (MÉXICO)','LEGAL (MÉXICO)','CADENA DE SUMINISTRO (MÉXICO)','PERSONAS Y ORGANIZACIÓN (MÉXICO)'];
    /*
    let gDepartmentList = employees.map(({ globalDepartment }) => globalDepartment);
    let uniqueDepartments = Array.from(new Set(gDepartmentList))
    let sortedUniqueDepartments = uniqueDepartments.sort();
    */
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
  
    var empList = document.getElementById('empFilterList') as HTMLDataListElement;
    
    var i, L = empList.options.length - 1;
    for(i = L; i >= 0; i--) {
      empList.children[i].remove();
    }

    //var globals = ['IT','GLOBAL MRO & US,MX INDUSTRIAL PROCUREMENT','PROCUREMENT','PROCUREMENT PROCESS & PLANNING','','','','','',''];
    
    for (var j = 0; j < sortedUniqueEmps.length; j++) {
      if (sortedUniqueEmps[j] !== undefined && sortedUniqueEmps[j] !== ""){
        var opt = document.createElement("option");
        opt.text = sortedUniqueEmps[j];
        empList.appendChild(opt);
      }
    }
  
  }

  private departmentFilter(filter: string) {
    /*
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
    }*/

    let filter_aux = filter.replace(" (MÉXICO)","").replace(" (GLOBAL)","");
    console.log(filter_aux);
    console.log(employees);

    var employees_filtered = employees.filter(function (el) {
      var nodeRoot = employees.filter(obj => {
        return obj.name === ''
      })
        
      nodeRoot[0].globalDepartment = filter_aux
      nodeRoot[0].id = 0

      let isGlobal = (document.getElementById('global-org') as HTMLInputElement).checked;
      if (isGlobal){
        return el.globalDepartment === filter_aux;
      } else{
        return el.globalDepartment === filter_aux || el.id === 1049;
      }
    });
    
    this.new_render(employees_filtered, false);
  };

  private employeeFilter(filter: string) {

    let employeeList = employees.map(({ name }) => name);
    
    if (employeeList.includes(filter) && filter !== ''){
      
      var employeeNode = employees.filter(obj => {
            return obj.name === filter
      })

      let aux = employeeNode[0];
      var ids = [0, aux.id];
      let id = aux.id;
      let directParent = aux.parentId;
    
      while(aux.parentId !== 0 && aux.parentId !== 999999){
        var aux2 = employees.filter(function (el) {
          return el.id === aux.parentId
        });
        
        aux = aux2[0];
        ids.push(aux.id);
      }
      
      var employees_filtered = employees.filter(function (el) {
          var nodeRoot = employees.filter(obj => {
            return obj.name === '';
          })

          nodeRoot[0].id = 0;
          
          return ids.includes(el.id) || el.parentId === directParent || el.parentId === id;
        });
      
      this.new_render(employees_filtered, true);
    }
  };

  private localOrg(){

    /////////////////////////////
    var emp_ordered = employees.sort(this.orderEmployees);
    /////////////////////////////

    let d  = 'BRASKEM IDESA';
    var sortedUniqueDepartments = ['INDUSTRIAL','COMERCIAL','FINANZAS','SUSTENTABILIDAD','LEGAL','CADENA DE SUMINISTRO','PERSONAS Y ORGANIZACIÓN'];

    var employees_filtered = emp_ordered.filter(function (el) {
      var nodeRoot = emp_ordered.filter(obj => {
        return obj.name === ''
      })
        
      nodeRoot[0].globalDepartment = d
      nodeRoot[0].id = 0

      var stefanNode = emp_ordered.filter(obj => {
        return obj.name === 'STEFAN LANNA LEPECKI';
      })
        
      stefanNode[0].globalDepartment = d;
      
      return el.globalDepartment === d || sortedUniqueDepartments.includes(el.globalDepartment);
    });

    return employees_filtered;
  }

  private globalOrg(){

    /////////////////////////////
    var emp_ordered = employees.sort(this.orderEmployees);
    /////////////////////////////

    var sortedUniqueDepartments = ['INDUSTRIAL','COMERCIAL','FINANZAS','SUSTENTABILIDAD','LEGAL','CADENA DE SUMINISTRO','PERSONAS Y ORGANIZACIÓN','BRASKEM IDESA'];

    var employees_filtered = emp_ordered.filter(function (el) {
      var nodeRoot = emp_ordered.filter(obj => {
        return obj.name === ''
      })

      nodeRoot[0].id = 0;
      nodeRoot[0].globalDepartment = '';
      
      //return el.globalDepartment !== 'BRASKEM IDESA';
      return !(sortedUniqueDepartments.includes(el.globalDepartment));
    });

    return employees_filtered;
  }

  private home(){
    let isGlobal = (document.getElementById('global-org') as HTMLInputElement).checked;
    if (isGlobal){
      this.new_render(this.globalOrg(), false);
    } else{
      this.new_render(this.localOrg(), false);
    }

  }

  private changeOrg(){
    let isGlobal = (document.getElementById('global-org') as HTMLInputElement).checked;
    if (isGlobal){
      this.new_render(this.globalOrg(), false);
    } else{
      this.new_render(this.localOrg(), false);
    }
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
      if (employees[i].id !== 0 && employees[i].id !== 999999){
        let d = this.findGlobalDepartment(employees[i].id);
        employees[i].globalDepartment = d;
        if(employees[i].positionName.toUpperCase().includes("DIRECTOR")){
          employees[i].order_id = 1;
        } else if (employees[i].positionName.toUpperCase().includes("GERENTE")){
          employees[i].order_id = 2;
        } else if (employees[i].positionName.toUpperCase().includes("SUPERINTENDENTE")){
          employees[i].order_id = 3;
        } else if (employees[i].positionName.toUpperCase().includes("COORDINADOR")){
          employees[i].order_id = 4;
        } else if (employees[i].positionName.toUpperCase().includes("ESPECIALISTA")){
          employees[i].order_id = 5;
        } else if (employees[i].positionName.toUpperCase().includes("INGENIERO") || employees[i].positionName.toUpperCase().includes("ANALISTA")){
          employees[i].order_id = 6;
        } else if (employees[i].positionName.toUpperCase().includes("SUPERVISOR")){
          employees[i].order_id = 7;
        } else if (employees[i].positionName.toUpperCase().includes("ASISTENTE") || employees[i].positionName.toUpperCase().includes("AUXILIAR")){
          employees[i].order_id = 8;
        } else if (employees[i].positionName.toUpperCase().includes("OPERADOR") || employees[i].positionName.toUpperCase().includes("TECNICO") || employees[i].positionName.toUpperCase().includes("CHOFER")){
          employees[i].order_id = 9;
        } else{
          employees[i].order_id = 10;
        }
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
        <input id="empFilter" name="empFilter" list="empFilterList" placeholder=' --- Filter Employee --- ' onChange = {() => this.employeeFilter((document.getElementById("empFilter") as HTMLInputElement).value)} onClick = {() => this.updateEList()}/>
        <datalist id="empFilterList"></datalist>
        </form>
        <div id={styles['global-org-container']}>
        <input type="checkbox" id="global-org" name="global-org" onClick = {() => this.changeOrg()}/>
        <label htmlFor="global-org">Organigrama Global</label>
        </div>
        <OrganizationalChart data={this.localOrg()} />
        <img id={styles.background} src={require("../assets/organograma_novo.png")} alt="Braskem" />
        <div id={styles.pdf} onClick = {() => this.downloadPDF()}/>
      </div>
    );
  }

  private new_render(employees: any, expand: boolean) {
    const container = document.getElementsByClassName("org-chart")[0];
    ReactDOM.render(<OrganizationalChart data={employees}/>, container);

    if (expand){
      chart.expandAll();
      //chart.fit();
    } else{
      chart.collapseAll();
      chart.fit();
    }

    (document.getElementById("empFilter") as HTMLInputElement).value = '';
  }

  private downloadPDF(){
    const { svg } = chart.getChartState();
    chart.downloadImage({ node: svg.node(), scale: 3, isSvg: true });
  }
  
}
