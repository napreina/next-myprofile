import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
    const [status, setStatus] = useState("");
    const [actionStatus, setActionStatus] = useState("");
    const [errors, setErrors] = useState("");
    const {register, handleSubmit} = useForm();
    const onSubmit = async (data, e) => {
        setActionStatus('submitted');
        const serverUrl = "http://localhost:3000/api/contactme";
        const res = await fetch(serverUrl, {
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },
            method:'POST'
        })

        const result = await res.json();
        console.log(result);
        setStatus("success");

        setTimeout(() => {
            setActionStatus("");
        }, 2500);
    
    };

    const onError = (errors, e) => {
        setErrors(errors);
        console.log(errors);
        setTimeout(() => {
            setErrors('');
        }, 1500);
    };
    /*
    

      */
   
    return (
        <>
            <form className="contact-form" id="contact-form" onSubmit={handleSubmit(onSubmit, onError)}>
                <h4 className="contact-tl">Send Message</h4>
                <div className="row g-4">
                    <div className="col-md-6 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".3s">
                        <input type="text" {...register('name', { required: true })} name="name" className="form-control input-style-2" placeholder="Your Full Name*" />
                        { errors.name?.type === "required" && <p className="error">Name is required</p> }
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".4s">
                        <input type="text" {...register('email', { required:  true}, {pattern:/^\S+@\S+\.\S+$/} )} name="email" className="form-control input-style-2" placeholder="Your Email Address*" />
                        { errors.email?.type === "required" && <p className="error">Email is required</p> }
                        { errors.email?.type === "pattern" && <p className="error">Please insert correct email</p> }
                    </div>
                    <div className="col-md-12 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".2s">
                        <input type="text" {...register('subject', { required: true })} name="subject" className="form-control input-style-2" placeholder="Subject..." />
                        { errors.subject?.type === "required" && <p className="error">Subject is required</p> }
                    </div>
                    <div className="col-md-12 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".5s">
                        <textarea {...register('message', { required: true })} className="form-control input-style-2" name="message" placeholder="Your Message..."></textarea>
                        { errors.message?.type === "required" && <p className="error">Message is required</p> }
                    </div>
                    <div className="col-md-12 mt-50 mb-10 contact-sub-btn text-center wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".6s">
                        <button type="submit" id="submit" className="tm-btn-2">
                            Submit Message
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                    
                    <div className={ actionStatus == '' && "col-md-12 mt-20 d-none"}>
                    { status == "success"? 
                        (
                            <p className="form-message about-sub-title def">Thanks for your time, I will contact you soon.</p>
                        ): (
                            <p className="form-message about-sub-title def">Sorry , please try again later.</p>
                        )
                    }
                    </div>
                </div>
            </form>
        </>
    )
}