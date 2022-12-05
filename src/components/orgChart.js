import React, { useState, useRef, useLayoutEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { OrgChart } from "d3-org-chart";
import CustomNodeContent from "./customNodeContent";
import CustomExpandButton from "./customExpandButton";

const OrganizationalChart = (props) => {
  const d3Container = useRef(null);
  const [cardShow, setCardShow] = useState(false);
  const [employeeId, setEmployeeId] = useState("");

  const handleShow = () => setCardShow(true);
  const handleClose = () => setCardShow(false);

  useLayoutEffect(() => {
    const toggleDetailsCard = (nodeId) => {
      handleShow();
      setEmployeeId(nodeId);
    };
    const chart = new OrgChart();
	
	
	for (var i = 0; i < props.data.length; i++) {
		
		const img = new Image();
		// img.src = '/public/users/' + props.data[i].imageName.toString().padStart(8, '0') + '.PNG';
		// img.src = 'http://localhost:3000/users/00033420.PNG';
		// console.log(img.src);
		if (props.data[i].imageName != 'unknown'){
			props.data[i].imageUrl = 'http://localhost:3000/users/' + props.data[i].imageName.toString().padStart(8, '0') + '.PNG';
		}else{
			props.data[i].imageUrl = 'http://localhost:3000/users/' + props.data[i].imageName.toString() + '.PNG';
		}
	}

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
			.buttonContent((node, state) => {
			  return ReactDOMServer.renderToStaticMarkup(
				<CustomExpandButton {...node.node} />
			  );
			})
			.nodeContent((d) => {
			  return ReactDOMServer.renderToStaticMarkup(
				<CustomNodeContent {...d} />
			  );
			})
			.render();

		// chart.selectAll(".link")
		  // .style('stroke', "blue");

		}
	}
	catch(err){
		// TRATAR ERRO DE RELACIONAMENTOS, FORÇANDO COM O NÓ RAIZ
		var missing_id = err.message.replace('missing: ','')
		var nodeRoot = props.data.filter(obj => {
			return obj.name === ''
		})
		
		nodeRoot[0].id = +missing_id;
		
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
			.onNodeClick((d) => {
			  toggleDetailsCard(d);
			})
			.buttonContent((node, state) => {
			  return ReactDOMServer.renderToStaticMarkup(
				<CustomExpandButton {...node.node} />
			  );
			})
			.nodeContent((d) => {
			  return ReactDOMServer.renderToStaticMarkup(
				<CustomNodeContent {...d} />
			  );
			})
			.render();
		
	}
  }, [props, props.data]);

  return (
    <div className="org-chart" id="org-chart" ref={d3Container}>
      {cardShow}
    </div>
  );
};

export default OrganizationalChart;
