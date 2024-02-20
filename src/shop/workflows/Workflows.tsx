import React from "react";
import "../../scss/workflows/workflows.scss";
import MiniConsole from "../../image/workflows/Everyday-Bundle-Mocks-final_1366x911_crop_center.jpg.webp";
import MiniConsole2 from "../../image/workflows/Everyday-Bundle-Mocks-horizontal_1920x1281_crop_center.jpg.webp";

function Workflows() {
	return (
		<section className="workflows pt-4 pt-md-5 pb-4 pb-md-5">
			<div className="container">
				<div className="workflows__body row mx-n2 mx-lg-n4 mb-3">
					<div className="workflows__body-el col-md-6 mb-4 px-4">
						<article
							className="workflows__body-el-art position-relative"
							title="Mini Console"
						>
							<a href="#">
								<header className="image-container position-relative w-100">
									<img
										src={MiniConsole}
										alt="Mini Console Monogram"
										className="img-start object-fit:cover w-100 h-100 position-absolute top-0 start"
									/>
									<img
										src={MiniConsole2}
										alt="Mini Console Monogram"
										className="img-hover object-fit:cover w-100 h-100 position-absolute top-0 start"
									/>
								</header>
								<span className="workflows__body-el-art-preorder text-uppercase position-absolute end-0">
									Pre-order
								</span>
							</a>
							<footer className="mt-2 position-relative ">
								<div className="mb-2 d-flex flex-row justify-content-between">
									<div className="text-uppercase">mini console</div>
									<span>$202</span>
								</div>
								<p>Ideal for everyday shortcuts. Adaptable to any workflow.</p>
								<button
									className="workflows__body-el-art-footbtn text-uppercase position-absolute top-0 end-0"
									type="button"
								>
									shop now
								</button>
							</footer>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Workflows;
