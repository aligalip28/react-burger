import React from "react";
import ImageBanner from "../assets/banner.png";

function Contact() {
  return (
    <div className="container h-auto mt-24 mx-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
        <div
          className="lg:h-screen h-80 w-auto"
          style={{
            backgroundImage: `url(${ImageBanner})`,
            backgroundRepeat: "no-repeat",
            objectFit: "contain",
          }}
        ></div>
        <div className="">
          <h1 className="text-4xl mb-20 text-start px-4">
            Bizimle İletişime Geçin
          </h1>
          <form>
            <div className="px-5">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Lütfen Adınızı Soyadınızı Giriniz..."
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Lütfen Emailinizi Giriniz..."
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Mesajınız
                </label>
                <textarea
                  type="text"
                  id="message"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Lütfen Mesajınızı Giriniz..."
                  required
                />
              </div>

              <button
                type="submit"
                className="text-white bg-red-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-10"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
