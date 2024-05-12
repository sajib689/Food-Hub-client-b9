import React from "react";

class TeamSection extends React.Component {
  render() {
    return (
      <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl ">
            Our <span className="text-blue-500">Team</span>
          </h1>
          <p className="max-w-2xl text-center dark:text-gray-600">
            Meet the dedicated individuals behind our Food Sharing and Surplus
            Reduction Platform. Their passion and expertise drive our mission
            forward!
          </p>
          <div className="flex flex-row flex-wrap-reverse justify-center">
            <TeamMember
              name="Alice Johnson"
              role="Community Outreach Specialist"
              imageSrc="https://source.unsplash.com/100x100/?portrait?0"
            />
            <TeamMember
              name="John Smith"
              role="Software Developer"
              imageSrc="https://source.unsplash.com/100x100/?portrait?1"
            />
            <TeamMember
              name="Emma Brown"
              role="Marketing Coordinator"
              imageSrc="https://source.unsplash.com/100x100/?portrait?2"
            />
            <TeamMember
              name="Michael Davis"
              role="Operations Manager"
              imageSrc="https://source.unsplash.com/100x100/?portrait?3"
            />
            <TeamMember
              name="Sophia Martinez"
              role="Customer Support Specialist"
              imageSrc="https://source.unsplash.com/100x100/?portrait?4"
            />
            <TeamMember
              name="Daniel Wilson"
              role="Data Analyst"
              imageSrc="https://source.unsplash.com/100x100/?portrait?5"
            />
          </div>
        </div>
      </section>
    );
  }
}

class TeamMember extends React.Component {
  render() {
    return (
      <div className="flex flex-col justify-center m-8 text-center">
        <img
          alt=""
          className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
          src={this.props.imageSrc}
        />
        <p className="text-xl font-semibold leading-tight">{this.props.name}</p>
        <p className="dark:text-gray-600">{this.props.role}</p>
      </div>
    );
  }
}

export default TeamSection;
