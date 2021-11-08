import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form';
import Song from './components/Song';
import Info from './components/Info';
import axios from 'axios';

function App() {
  //Defining state
  const [searchLyric, setSearchLyric] = useState({});
  const [lyric, setLyric] = useState('');
  const [info, setInfo] = useState({});

  //UseEffect
  useEffect(() => {
    if(Object.keys(searchLyric).length === 0) return;

    const consultLyricsAPI = async () => {
      const {artist, song} = searchLyric;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [lyric, information] = await Promise.all([
        axios(url),
        axios(url2)
      ]);

      setLyric(lyric.data.lyrics);
      setInfo(information.data.artists[0]);
    }
    consultLyricsAPI();
  }, [searchLyric, info]);

  return (
    <Fragment>
      <Form
      setSearchLyric={setSearchLyric}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info
            info={info}
            />
          </div>
          <div className="col-md-6">
            <Song
            lyric={lyric}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
