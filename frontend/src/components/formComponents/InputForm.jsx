export default function InputForm ({title, type, id}) {
    return (
        <div className="form-control">
    <label className="label">
    <span className="label-text"> {title} </span>
    </label>
    <input type = {type} placeholder = {title} className="input input-bordered" id = {id} name = {id} />
</div>
    );
}