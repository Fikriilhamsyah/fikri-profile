import React, {useState} from 'react'

const Contact = () => {
  const [form, setform] = useState({name: '', email: '', message: ''});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = () => {};
  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit = () => {};

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7 mt-14">
          <lable className="text-black-500 font-semibold">
            Name
            <input type="text" name="name" id="" className="input" placeholder="John" required value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          </lable>
          <lable className="text-black-500 font-semibold">
            Email
            <input type="email" name="email" id="" className="input" placeholder="john@gmail.com" required value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          </lable>
          <lable className="text-black-500 font-semibold">
            Your Message
            <textarea name="message" rows={4} id="" className="textarea" placeholder="Let me know how I can help you!" required value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          </lable>
          <button type="submit" className="btn" disabled={isLoading} onFocus={handleFocus} onBlur={handleBlur}>{isLoading ? 'Sending...' : 'Send Message'}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact