import React from "react";
import "../../scss/workflows/workflows.scss";
import { Link } from "react-router-dom";

interface Product {
	id: number;
	title: string;
	shortInfo: string;
	price: string;
	currency: string;
	cod: string;
	image: string;
	image2: string;
	images: string[];
}

interface WorkflowsProps {
	products: Product[];
	column: string;
}

function Workflows(data: WorkflowsProps) {
	let productsData = data.products;

	let arrayLi = [];
	for (let index = 0; index < productsData.length; index++) {
		const element = productsData[index];
		arrayLi.push(
			<div
				key={element.id}
				className={
					data.column === "md"
						? "workflows__body-el col-md-6 mb-4 px-4"
						: "col-md-6 col-xl-4 mb-4 px-4 px-lg-4"
				}
			>
				<article
					className="workflows__body-el-art position-relative"
					title={element.title}
				>
					<Link to={`/products?id=${element.id}`}>
						<header className="image-container position-relative w-100">
							{element.image2 === "" ? (
								<img
									src={element.image}
									alt={element.title}
									className=" object-fit-cover w-100 h-100 position-absolute top-0 start"
								/>
							) : (
								<>
									<img
										src={element.image}
										alt={element.title}
										className="img-start object-fit-cover w-100 h-100 position-absolute top-0 start"
									/>
									<img
										src={element.image2}
										alt={element.title}
										className="img-hover object-fit-cover w-100 h-100 position-absolute top-0 start"
									/>
								</>
							)}
						</header>
						<span className="workflows__body-el-art-preorder text-uppercase position-absolute end-0">
							Pre-order
						</span>
					</Link>
					<footer className="mt-2 position-relative ">
						<div className="mb-2 d-flex flex-row justify-content-between">
							<div className="text-uppercase">{element.title}</div>
							<span>
								{element.currency}
								{element.price}
							</span>
						</div>
						<p>{element.shortInfo}</p>
						<Link to={`/products?id=${element.id}`}>
							<button
								className="workflows__body-el-art-footbtn text-uppercase position-absolute top-0 end-0"
								type="button"
							>
								shop now
							</button>
						</Link>
					</footer>
				</article>
			</div>
		);
	}

	return (
		<section className="workflows pt-4 pt-md-5 pb-4 pb-md-5">
			<div className="container">
				<div className="workflows__body row mx-n2 mx-lg-n4 mb-3">{arrayLi}</div>
			</div>
		</section>
	);
}

export default Workflows;
