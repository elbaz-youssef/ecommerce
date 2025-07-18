
interface TeamMemberProps {
    urlImg: string;
    namePerson: string;
    job: string;
}

const TeamMember = ({urlImg, namePerson, job}: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-3">
        <div className="mt-3">
            <img src={urlImg} alt="person" loading="lazy" />
        </div>
        <div>
            <h3 className="-mb-3">{namePerson}</h3>
            <p className="text-sm">{job}</p>
        </div>
    </div>
  )
}

export default TeamMember;