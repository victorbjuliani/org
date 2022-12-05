import React from 'react';
import OrganizationalChart from "./components/orgChart";
import employees from "./data";
import { createRoot } from "react-dom/client";

// FUNÇÃO PARA VERIFICAR IMAGENS QUE NÃO EXISTAM: TROCAR PARA UNKNOWN.PNG

// for (var i = 0; i < employees.length; i++) {
	// var img = new Image();
	// img.src = employees[i].imageUrl;
	// console.log(img.height !== 0);
	// if (img.height === 0){
		// employees[i].imageUrl = "/users/unknown.png"
	// }
// }

// function createImageIcons(){
	// for (var i = 0; i < employees.length; i++) {
		// var img = new Image();
		// img.src = '/public/users/' + employees[i].imageName.toString().padStart(8, '0') + '.PNG';
		
		// if (fs.existsSync('/public/users/' + employees[i].imageName.toString().padStart(8, '0') + '.PNG')) {
			// console.log("TOP");
		// }else{
			// console.log("FODEU");
		// }
		
		// if (img.complete){
			// employees[i].imageUrl = "/users/unknown.png"
		// }
		// else{
			// employees[i].imageUrl = '/users/' + employees[i].imageName.toString().padStart(8, '0') + '.PNG';
		// }
	// }
// }

function departmentFilter() {
	var input = document.getElementById('departmentFilter');
	var filter = input.value.toUpperCase();
	let departmentList = employees.map(({ department }) => department)
	
	if (departmentList.includes(filter)){
		var employees_filtered = employees.filter(function (el) {
			var nodeRoot = employees.filter(obj => {
			  return obj.name === ''
			})
			  
			nodeRoot[0].department = filter
			nodeRoot[0].id = 0
			return el.department === filter
		});
		// document.getElementById('org-chart').data = employees_filtered;
		// var org = document.getElementById('org-chart');
		// org.style.setProperty('display', 'none');
		// org.data = employees_filtered;
		// console.log(org);
		
		const container = document.getElementById("root");
		const root = createRoot(container);
		root.render(<>
			  <input type="text" id="departmentFilter" onKeyUp={() => departmentFilter()} placeholder="Search for departments..."/>
			  <input type="text" id="employeeFilter" onKeyUp={() => employeeFilter()} placeholder="Search for employees..."/>
			  <OrganizationalChart data={employees_filtered} />
			  <img id="background" src="/organograma_novo.png" alt="Braskem" />
			</>);
	}
	
	// console.log(employees_filtered)
	console.log(departmentList)
};

function employeeFilter() {
	var input = document.getElementById('employeeFilter');
	var filter = input.value.toUpperCase();
	let employeeList = employees.map(({ name }) => name);

	var employeeNode = employees.filter(obj => {
			  return obj.name === filter
	})

	employeeNode[0].parentId = 0

	var employees_filtered2 = employees.filter(function (el) {
			return el.name.match('LLUVIA*')
		});
	// console.log('employee')
	// console.log(employees_filtered2)
	// var nodeRoot = employees.filter(obj => {
			  // return obj.name === ''
	// })

	// nodeRoot[0].name = filter

	// console.log(employeeList);
	// console.log(employeeList.includes(filter));
	// console.log(nodeRoot);
	
	if (employeeList.includes(filter) && filter !== ''){
		var employees_filtered = employees.filter(function (el) {
			return el.name === filter || el.id === 0
		});
		
		const container = document.getElementById("root");
		const root = createRoot(container);
		root.render(<>
			  <input type="text" id="departmentFilter" onKeyUp={() => departmentFilter()} placeholder="Search for departments..."/>
			  <input type="text" id="employeeFilter" onKeyUp={() => employeeFilter()} placeholder="Search for employees..."/>
			  <OrganizationalChart data={employees_filtered} />
			  <img id="background" src="/organograma_novo.png" alt="Braskem" />
			</>);

		// console.log('HEY')
		// console.log(employees_filtered)
	}
};

const App = () => {
  return (
    <>
	  <input type="text" id="departmentFilter" onKeyUp={() => departmentFilter()} placeholder="Search for departments..."/>
	  <input type="text" id="employeeFilter" onKeyUp={() => employeeFilter()} placeholder="Search for employees..."/>
      <OrganizationalChart data={employees} />
	  <img id="background" src="/organograma_novo.png" alt="Braskem" />
    </>
  );
};

export default App;


// GRAVAR ASSIGNMENT NUMBER NO JSON