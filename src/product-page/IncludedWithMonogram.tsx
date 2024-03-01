import React from "react";
import "../scss/products-page/products-page.scss";

function IncludedWithMonogram() {
	return (
		<section className="included ">
			<div className="container">
				<article className="included__body px-5 py-5">
					<div className="included__body-title mb-3">MONOGRAM CREATOR APP</div>
					<p className="included__body-p">
						Included with every Console is Monogram Creator app, a free and
						powerful macOS and Windows app to optimize Creative Console to any
						workflow; no coding or scripting required.
					</p>
					<ul>
						<li>
							Adjust sensitivity and range for any control to get the perfect
							feel
						</li>
						<li>Set and change LED colors for any control</li>
						<li>
							Advanced gestures for every input: dial press, dial press & turn,
							key press, key press-and-hold, Orbiter tilt mode
						</li>
						<li>
							Standard input device mode: keyboard shortcuts, keyboard macros,
							joystick, mouse actions
						</li>
						<li>
							Digitally label modules and bring up a preview on screen for a
							reminder
						</li>
						<li>
							Unlock a new world of creativity with Audio, Photo, and Video
							Console Packs; giving your Console hundreds of more functions and
							profiles
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
}

export default IncludedWithMonogram;
