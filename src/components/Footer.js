import React from "react";
import * as Unicons from "@iconscout/react-unicons"
import { Link } from "react-router-dom";
export default function Footer(){
    return(
        <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
        <div className="py-[30px] px-0 border-t border-slate-800">
            <div className="container text-center">
                <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
                    <div className="lg:col-span-3 md:text-start text-center">
                        <Link to="#" className="text-[22px] focus:outline-none">
                            <img src="/images/logo-light.png" className="mx-auto md:me-auto md:ms-0" alt=""/>
                        </Link>
                    </div>

                    <div className="lg:col-span-5 text-center mt-6 md:mt-0">
                        <p className="mb-0">© {new Date().getFullYear()} Dennis. Design & Develop with{""} <i className="mdi mdi-heart text-red-600"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                    </div>

                    <ul className="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0">
                        <li className="inline"><Link to="https://dribbble.com/shreethemes" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"><Unicons.UilDribbble width={16}/></Link></li>
                        <li className="inline"><Link to="https://www.behance.net/shreethemes" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"><Unicons.UilBehance width={16}/></Link></li>
                        <li className="inline"><Link to="http://linkedin.com/company/shreethemes" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"><Unicons.UilLinkedin width={16}/><i className="uil uil-linkedin" title="Linkedin"></i></Link></li>
                        <li className="inline"><Link to="https://www.facebook.com/shreethemes" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"><Unicons.UilFacebookF width={16} /><i className="uil uil-facebook-f align-middle" title="facebook"></i></Link></li>
                        <li className="inline"><Link to="https://www.instagram.com/shreethemes/" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"><Unicons.UilInstagram width={16}/></Link></li>
                        <li className="inline"><Link to="https://twitter.com/shreethemes" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"><Unicons.UilTwitter width={16}/></Link></li>
                        <li className="inline"><Link to="mailto:support@shreethemes.in" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"><Unicons.UilEnvelope width={16}/></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
}