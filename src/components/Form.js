function Form() {
    return (
       <section>
            <form action="">
                <legend>Select the type of Blood</legend>
                <select name="" id="">
                    <option value="">Select one type</option>
                    <option value="">A+</option>
                    <option value="">A-</option>
                    <option value="">B+</option>
                    <option value="">B-</option>
                    <option value="">AB+</option>
                    <option value="">AB-</option>
                    <option value="">0+</option>
                    <option value="">0-</option>
                </select>
                <legend>Select if you want to receive or donate blood</legend>
                <select name="" id="">
                    <option value="">Select one Option</option>
                    <option value="">To Receive</option>
                    <option value="">to Donate</option>
                </select>
            </form>
            <button>Enter</button>
            <button>Reset</button>
       </section>
    )
}

export default Form;