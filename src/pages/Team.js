import React from 'react';
import Srijan from '../assets/srijan.png'

const teamMembers = [
  {
    name: 'Subham Kumar',
    role: '',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGrKUuvIDtwgg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1667437596772?e=1750291200&v=beta&t=Hj-yQrPqCC3S1UMDZVdyQDKa9RgC4a2TRlHx5S8gAY4',
    link: 'https://www.linkedin.com/in/subham-kumar-a9a2001a0/'
  },
  {
    name: 'Srijan Sehdev',
    role: '',
    image: Srijan,
    link: 'https://www.linkedin.com/in/srijan-sehdev-16237b259/'
  },
  {
    name: 'Shobhit Kumar',
    role: '',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQER5zAZyCUr2w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722854452417?e=1750291200&v=beta&t=_mN0PlH2q9_Cr6tJCRDuQ5l9TqgWk_4dV5RnbWonWFg',
    link: 'https://www.linkedin.com/in/shobhit-kumar28/'
  },
  {
    name: 'Srikant Agarwal',
    role: '',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEFfJp9DNamlw/profile-displayphoto-shrink_400_400/B56ZYMpAobHoAg-/0/1743968800210?e=1750291200&v=beta&t=jLUqiudWbxjtJA1bZgmHR3s6oTdPFoIHrHZ3lWZBca4',
    link: 'https://in.linkedin.com/in/srikant-agrawal-905bb11ba'
  },

  {
    name: 'Tejaswi Kumari',
    role: '',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGWiHyi8RlhAg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1671026747326?e=1750291200&v=beta&t=rdXRBPrhOn3xehG4OpOQX5q0aZ7ZAbSV2p_C42r_bCs',
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
