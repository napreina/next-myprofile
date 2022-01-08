import Image from "next/image";

export default function CounterArea() {
    return (
        <>
        <div className="counter-area counter-bg-2 de-padding">
			<div className="container">
				<div className="counter-vidz">
					<div className="counter-wpr grid-3">
						<div className="fun-fact">
							<div className="fun-fact-icon">
								<Image src="/img/tony/icon/c1.png" width={36} height={36}  layout="fixed" alt="thumb" />
							</div>
							<div className="fun-desc">
								<span className="medium">
									Year of
									<br/>
									Experience
								</span>
								<p className="timer" data-count="+"  data-to="6" data-speed="6000">6</p>
							</div>
						</div>
						<div className="fun-fact">
							<div className="fun-fact-icon">
								<Image src="/img/tony/icon/c2.png" width={36} height={36}  layout="fixed"  alt="thumb" />
							</div>
							<div className="fun-desc">
								<span className="medium">
									Global Working
									<br/>
									Client
								</span>
								<p className="timer" data-count="+" data-to="34" data-speed="6000">34</p>
							</div>
						</div>
						<div className="fun-fact">
							<div className="fun-fact-icon">
								<Image src="/img/tony/icon/c3.png" width={36} height={36}  layout="fixed" alt="thumb" />
							</div>
							<div className="fun-desc">
								<span className="medium">
									Awards
									<br/>
									Win
								</span>
								<p className="timer" data-count="+" data-to="31" data-speed="6000">31</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        </>
    );
}