import React from 'react';
import Srijan from '../assets/srijan.png'

const teamMembers = [
  {
    name: 'Srijan Sehdev',
    role: '',
    image: Srijan,
    link: 'https://www.linkedin.com/in/srijan-sehdev-16237b259/'
  },
  {
    name: 'Shobhit Kumar',
    role: '',
    image: 'https://media.licdn.com/dms/image/C4D03AQHLPAskfbLicA/profile-displayphoto-shrink_800_800/0/1661604445084?e=1686182400&v=beta&t=7jiZ7jSELpXaJQTpcLUuyyntmsoJ7APdut2GGMVPJvU',
    link: 'https://www.linkedin.com/in/shobhit-kumar28/'
  },
  {
    name: 'Srikant Agarwal',
    role: '',
    image: 'https://media.licdn.com/dms/image/D4D03AQFJWwuh1aotag/profile-displayphoto-shrink_800_800/0/1673159715357?e=1686182400&v=beta&t=7S7KgIG1rEzCEgVO-pvLeS4yDjEFkfKwrlA_kALeWYI',
    link: 'https://in.linkedin.com/in/srikant-agrawal-905bb11ba'
  },
  {
    name: 'Subham Kumar',
    role: '',
    image: 'https://media.licdn.com/dms/image/D4D03AQGrKUuvIDtwgg/profile-displayphoto-shrink_800_800/0/1667437592477?e=1686182400&v=beta&t=BPVBoi_i2kDKtCZYrBIFzQOf-NfjeEXGtfU1oD_SgTo',
    link: 'https://www.linkedin.com/in/subham-kumar-a9a2001a0/'
  },
  {
    name: 'Tejaswi Kumari',
    role: '',
    image: 'https://media.licdn.com/dms/image/D4D03AQGWiHyi8RlhAg/profile-displayphoto-shrink_800_800/0/1671026744041?e=1686182400&v=beta&t=-7NIvnHXj4G4q8QyL11ZiPGbd3dBbZx_ebsm1zjYeKo',
    link: 'https://www.linkedin.com/in/tejaswi-kumari-9b8a8a22a/'
  },
];

const Team = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', marginTop: '2rem'}}><strong>Meet Our Team</strong></h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        {teamMembers.map(member => (
          <div key={member.name} style={{ width: '200px', margin: '1rem', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', borderRadius: '8px' }}>
            <img src={member.image} alt={member.name} style={{ width: '200px',
            height:'200px', borderRadius: '8px 8px 0 0' }} />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{member.name}</h3>
              <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{member.role}</p>
              <a href={member.link} target='_blank' style={{ fontSize: '1rem', color: '#007bff' }}>View profile</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
