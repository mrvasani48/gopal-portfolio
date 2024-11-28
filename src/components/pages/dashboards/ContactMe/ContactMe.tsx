import { Icon } from "@iconify/react";
import { Button } from "@mantine/core";
import { images } from "assets/img";
import FormTextarea from "components/common/inputs/FormTextarea";
import TextInputCommon from "components/common/inputs/TextInputCommon";
import { useForm } from "react-hook-form";
import contactMeSchema from "schema/contactMeSchemaa";
import { contactData, NAME } from "utils/constant";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import { config } from "../../../../../env";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  to_name: NAME,
};

const ContactMe = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactMeSchema),
    defaultValues: initialValues,
  });

  // Form submission handler
  const onSubmit = async () => {
    try {
      setIsSubmitting(true);
      emailjs
        .sendForm(config.serviceKey, config.templateKey, formRef.current, {
          publicKey: config.publicKey,
        })
        .then(
          () => {
            toast.success("SUCCESS!");
            setIsSubmitting(false);
          },
          (error) => {
            console.log("FAILED...", error);
            setIsSubmitting(false);
          }
        );
    } catch (error) {
      setIsSubmitting(false);
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="contact-me-container" id="contact">
      <div className="mt-16">
        <p className="text-xl  text-center text-[var(--mantine-color-theme-7)]">
          {" "}
          {contactData.pageTitle}{" "}
        </p>
        <h2 className="text-gray-300 text-7xl md:text-5xl text-center pt-10 mb-12">
          {contactData.pageDescription}
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-4 group">
          <div className="flex items-center justify-center group">
            <div className="max-w-md w-full overflow-hidden rounded-3xl shadow-2xl shadow-dark-500 p-10">
              {/* Hero Image */}
              <div className="w-full h-48 bg-gray-700 flex items-center justify-center overflow-hidden rounded-xl">
                <img
                  src={images.contactMe}
                  alt="Handshake"
                  className="w-full h-full object-cover group-hover:scale-125 "
                />
              </div>

              {/* Content */}
              <div className="pt-6 space-y-6">
                {/* Name and Title */}
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold text-white">
                    {contactData.name}
                  </h1>
                  <p className="text-gray-400">{contactData.role}</p>
                </div>

                {/* Description */}
                <p className="text-gray-400">{contactData.description}</p>

                {/* Contact Information */}
                <div className="space-y-2">
                  <p className="text-gray-400">
                    Phone:{" "}
                    <span className="text-white">{contactData.phone}</span>
                  </p>
                  <p className="text-gray-400">
                    Email:{" "}
                    <span className="text-white">{contactData.email}</span>
                  </p>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-sm text-gray-500 uppercase mb-4">
                    Find with me
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href={contactData.socialLinks.TWITTER}
                      className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href={contactData.socialLinks.LINKEDIN}
                      className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                      </svg>
                    </a>
                    <a
                      href={contactData.socialLinks.INSTAGRAM}
                      className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
            <div className=" rounded-3xl shadow-2xl shadow-dark-500 p-10 ">
              <div className="grid grid-cols-2 gap-4">
                <TextInputCommon
                  label="Your Name"
                  name="name"
                  placeholder="Enter your name"
                  control={control}
                  error={errors.name?.message}
                  rules={{ required: "Name is required" }}
                />
                <TextInputCommon
                  label="Phone Number"
                  name="phone"
                  placeholder="Enter your phone number"
                  control={control}
                  error={errors.phone?.message}
                  rules={{
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Phone number must be 10 digits",
                    },
                  }}
                />
              </div>
              <TextInputCommon
                label="Email"
                name="email"
                placeholder="Enter your email"
                control={control}
                error={errors.email?.message}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                }}
              />
              <TextInputCommon
                label="Subject"
                name="subject"
                placeholder="Enter subject"
                control={control}
                error={errors.subject?.message}
              />
              <FormTextarea
                label="Your Message"
                name="message"
                placeholder="Type your message here"
                control={control}
                error={errors.message?.message}
              />
              <Button
                type="submit"
                className="mt-6 font-semibold rounded w-full p-4 bg-gray-800"
                loading={isSubmitting}
              >
                <p className="flex justify-center items-center gap-2 text-[var(--mantine-color-theme-7)]">
                  {" "}
                  Send Message
                  <Icon
                    icon="ep:right"
                    className=" text-xl text-[var(--mantine-color-theme-7)]"
                  />
                </p>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
