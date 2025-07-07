import TeamMember from './TeamMember';
import Form from './Form';

import { teamMembers } from './data';


const ContactForm = () => {
    
  return (
    <section className="pb-25">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:items-center gap-10 border border-gray-100 rounded-2xl p-3 sm:p-5">

                {/* Team Members */}
                <div className="lg:col-span-1 flex flex-row justify-center flex-wrap gap-0 lg:flex-col lg:gap-5">
                    {
                        teamMembers.map(({urlImg, namePerson, job}) => (
                            <TeamMember 
                                key={urlImg}
                                urlImg={urlImg}
                                namePerson={namePerson}
                                job={job}
                            />
                        ))
                    }
                </div>

                {/* Contact Form */}
                <Form />

            </div>
        </div>
    </section>
  )
}

export default ContactForm;