import classNames from "classnames"
function Button({ text, variant = "default", Class }) {
    return (
        <button className={classNames(
            Class,
            {
                "p-4 rounded h-100 flex items-center": true,
                "bg-gray-200": variant === "default",
                "bg-red-600 text-white": variant === "danger",
                "bg-green-500 text-white": variant === "success",
            }
        )}>
            {text}
        </button>
    )
}
export default Button