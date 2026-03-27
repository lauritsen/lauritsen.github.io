import React from 'react';
import MusicRelease from './MusicRelease';

const Discography = [
  {
    band: 'Røgsignal',
    title: 'Live Et Sted I Jylland',
    year: 2014,
    myRole: 'Bass, Mix, Master',
    cover: 'https://i.scdn.co/image/ab67616d00001e028a69947664dd623508a6dbb0',
    href: 'https://tidal.com/album/63818753/u',
  },
  {
    band: 'Røgsignal',
    title: 'Live Et Andet Sted I Jylland',
    year: 2015,
    myRole: 'Bass, Mix, Master',
    cover: 'https://i.scdn.co/image/ab67616d00001e023afb7fffd856417c2ffb5419',
    href: 'https://tidal.com/album/63818789/u',
  },
  {
    band: 'Røgsignal',
    title: 'Pletter På Solen',
    year: 2016,
    myRole: 'Bass',
    cover: 'https://i.scdn.co/image/ab67616d00001e02f5a61e5748bc3fd40fa9a8d3',
    href: 'https://tidal.com/album/63818798/u',
  },
  {
    band: 'Røgsignal & ITYA',
    title: 'Live I Garagen',
    year: 2018,
    myRole: 'Bass',
    cover: 'https://i.scdn.co/image/ab67616d00001e021d554d8cb4166e14408247ae',
    href: 'https://tidal.com/album/83293312/u',
  },
  {
    band: 'Røgsignal',
    title: 'Bodies',
    year: 2019,
    myRole: 'Bass',
    cover: 'https://i.scdn.co/image/ab67616d00001e02e87bc23b2be37028d330f5aa',
    href: 'https://tidal.com/album/105256120/u',
  },
  {
    band: 'Røgsignal',
    title: 'weekend',
    year: 2022,
    myRole: 'Bass',
    cover: 'https://i.scdn.co/image/ab67616d00001e02225d79e78f1df0febc375d92',
    href: 'https://tidal.com/album/224656180/u',
  },
  {
    band: 'DRöN',
    title: 'Judas',
    year: 2013,
    myRole: 'Drums',
    cover: 'https://i.scdn.co/image/ab67616d00001e02261e9949dee13fb1270c1d73',
    href: 'https://tidal.com/album/88611284/u',
  },
  {
    band: 'DRöN',
    title: 'Muddy Waters',
    year: 2018,
    myRole: 'Drums, Mix',
    cover: 'https://i.scdn.co/image/ab67616d00001e02cb54a7ca6a73b2b5b61f427a',
    href: 'https://tidal.com/album/91070068/u',
  },
  {
    band: 'When Daddy Sleeps',
    title: 'Ships In The Night',
    year: 2015,
    myRole: 'Drums',
    cover: 'https://i.scdn.co/image/ab67616d00001e021ac60130a42163c528a32697',
    href: 'https://tidal.com/album/63818783/u',
  },
];

const Music = () => (
  <div className='music'>
    <p>I like music. Here's some music I took part in creating.</p>
    <div className='discography'>
      {Discography.sort((a, b) => b.year - a.year).map((release, index) => (
        <MusicRelease release={release} key={index} />
      ))}
    </div>
  </div>
);

export default Music;
