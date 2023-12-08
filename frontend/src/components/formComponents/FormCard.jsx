export default function FormCard({title, description, href, hrefText, hrefTwo, hrefTwoText, submitValue, children}) {
    return (
        <div className="hero min-h-screen z-50">
	<div className="hero-content flex-col lg:flex-row-reverse">
	  <div className="text-center lg:text-left">
			<h1 className="text-5xl font-bold"> {title} </h1>
			<p className="py-6"> {description} </p>
	  </div>
	  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border-2 border-white rounded-3xl bg-black">
			<div className="card-body">
					{children}
					<label className="label">
						<a href={href} className="label-text-alt link link-hover"> {hrefText} </a>
						<a href={hrefTwo} className="label-text-alt link link-hover"> {hrefTwoText} </a>
					</label>
					<div className="form-control mt-6">
						<input type = "submit" value = {submitValue} className="btn btn-primary" id = "button"/>
					</div>
			</div>
		</div>
	</div>
</div>
    );
}