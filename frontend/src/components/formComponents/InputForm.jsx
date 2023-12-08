export default function InputForm ({title, type}) {
    return (
        <div className="form-control">
    <label className="label">
    <span className="label-text"> {title} </span>
    </label>
    <input type = "email" placeholder = {title} className="input input-bordered" />
</div>
    );
}