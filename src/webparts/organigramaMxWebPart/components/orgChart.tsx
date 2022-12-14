import * as React from "react";
import { useState, useRef, useLayoutEffect } from "react";
import * as ReactDOMServer from "react-dom/server";
import { OrgChart } from "d3-org-chart";
import CustomNodeContent from "./customNodeContent";
import CustomExpandButton from "./customExpandButton";
import * as d3 from 'd3';

const chart = new OrgChart();

const OrganizationalChart = (props: any) => {

  const d3Container = useRef(null);
  const [cardShow, setCardShow] = useState(false);
  //const [employeeId, setEmployeeId] = useState("");

  const handleShow = () => setCardShow(true);
  //const handleClose = () => setCardShow(false);

  useLayoutEffect(() => {
    const toggleDetailsCard = (nodeId: any) => {
      handleShow();
      //setEmployeeId(nodeId);
    };
    //const chart = new OrgChart();
	
	
	for (let i = 0; i < props.data.length; i++) {
		
		if (props.data[i].imageName !== 'unknown'){
			props.data[i].imageUrl = props.data[i].imageName.toString().padStart(8, '0') + '.png';
		}
		else{
			props.data[i].imageUrl = props.data[i].imageName.toString() + '.png';
		}
		
		/*
		if (props.data[i].imageName == 'logo-braskem'){
			props.data[i].imageUrl = props.data[i].imageName.toString().padStart(8, '0') + '.png';
		}
		else{
			props.data[i].imageUrl = 'unknown.png';
		}
		*/
	}
	/*
	const images = require.context("../assets/users", true, /\.png$/);
	images.keys().forEach((image) => {
		console.log(image);
	});*/

	try{
		if (props.data && d3Container.current) {
		  chart
			.container(d3Container.current)
			.data(props.data)
			.nodeWidth((d) => 150)
			.nodeHeight((d) => 270)
			.layout("left")
			.compact(true)
			.compactMarginBetween((d) => 80)
			.compactMarginPair((d) => 120)
			.childrenMargin((node) => 30)
            // .style("stroke-width", "4")
			.onNodeClick((d) => {
			  toggleDetailsCard(d);
			})
			.buttonContent((node) => {
				return ReactDOMServer.renderToStaticMarkup(
				  <CustomExpandButton {...node.node} />
				);
			  })
			.nodeContent((d) => {
			  return ReactDOMServer.renderToStaticMarkup(
				<CustomNodeContent {...d} />
			  );
			})
			.svgHeight(530)
			.render();

			//console.log(d3Container.current);

		d3.select("#d3Container").select("svg")
		//.style("height","75%")
		.style("z-index","2")
		.style("position","absolute")
		//.style("margin-top","8.6%");
		.style("margin-top","17%");

		d3.select("#d3Container").sort(function(a:any,b:any){
			return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
		  });

		}
	}
	catch(err){
		console.log(err)
	};
	
  }, [props, props.data]);

  return (
    <div className='org-chart' id="d3Container" ref={d3Container}>
      {cardShow}
    </div>
  );
};

export default OrganizationalChart;
export {chart};