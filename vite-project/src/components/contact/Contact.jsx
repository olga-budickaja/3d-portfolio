import { Container, Form, Input, Left, Section, Textarea, Title, Right } from "./ContactStyle.js";
import { Button } from "../navbar/NavbarStyle.js";
import Map from "../Map.jsx";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

const Contact = () => {
    const YOUR_SERVICE_ID = import.meta.env.VITE_APP_YOUR_SERVICE_ID;
    const YOUR_TEMPLATE_ID = import.meta.env.VITE_APP_YOUR_TEMPLATE_ID;
    const YOUR_PUBLIC_KEY = import.meta.env.VITE_APP_YOUR_PUBLIC_KEY;
    const ref = useRef();
    const [success, setSuccess] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, ref.current, YOUR_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setSuccess(true);
        }, (error) => {
            console.log(error.text);
            setSuccess(false)
        });

    }
    return (
        <Section>
           <Container>
               <Left>
                   <Form ref={ref} onSubmit={handleSubmit}>
                       <Title>Contact Us</Title>
                       <Input name=" name" placeholder="Name"/>
                       <Input name="email" placeholder="email"/>
                       <Textarea name="message" placeholder="Write your message" rows={10}/>
                       <Button type="submit">Send</Button>
                       {success &&
                           "Your message been sent. We`ll get back to you soon :)"
                       }
                   </Form>
               </Left>
               <Right>
                    <Map />
               </Right>
           </Container>
        </Section>
    );
};

export default Contact;