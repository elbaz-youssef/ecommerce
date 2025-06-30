import person1 from '@/assets/people/1.png'
import person2 from '@/assets/people/2.png'
import person3 from '@/assets/people/3.png'
import type { TeamMemberType } from '../../../types/contact/team-member.types'
import TeamMember from './TeamMember'
import MainButton from '../../common/buttons/MainButton'

const ContactForm = () => {
    const teamMembers: TeamMemberType[] = [
        {
            urlImg: person1,
            namePerson: "John Doe",
            job: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, cum."
        },
        {
            urlImg: person2,
            namePerson: "William Smith",
            job: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, cum."
        },
        {
            urlImg: person3,
            namePerson: "Emma Stone",
            job: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, cum."
        }
    ]
  return (
    <section className="pb-15 pt-10">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:items-center gap-10 border border-gray-100 rounded-2xl p-3 sm:p-5">
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
                <div className="text-center lg:text-left lg:col-span-2">
                    <p className="uppercase">leave a message</p>
                    <h3 className="mb-3">We love to hear from you</h3>
                    <form className="flex flex-col gap-3">
                        <input className="border border-gray-100 p-3 rounded-lg" type="text" placeholder="Your Name" />
                        <input className="border border-gray-100 p-3 rounded-lg" type="email" placeholder="E-mail" />
                        <input className="border border-gray-100 p-3 rounded-lg" type="text" placeholder="Subject" />
                        <textarea className="border border-gray-100 p-3 rounded-lg" rows={6} placeholder="Your Message"></textarea>
                        <div>
                            <MainButton roundedLeft={1}>Send</MainButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactForm