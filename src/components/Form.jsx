import React , {useState} from 'react'

const Form = ({setSearchLyric}) => {

    const [search, setSearch] = useState({
        artist: '',
        song: ''
    });

    const [error, setError] = useState(false);

    const {artist, song} = search;

    //Function for read each input content
    const setState = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    //Consult API
    const searchInfo = e => {
        e.preventDefault();

        if(artist.trim() === '' || song.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        //If everything is okay, continue to main component
        setSearchLyric(search);
    }

    return (  
        <div className="bg-info">
            {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios.</p> : null}
            <div className="container">
                <div className="row">
                    <form
                    onSubmit={searchInfo} 
                    className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">¡BUSCA LAS LETRAS DE TUS CANCIONES FAVORITAS!</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input 
                                        type="text" 
                                        className="form-control"
                                        name="artist"
                                        placeholder="Nombre de Artista o Banda"
                                        onChange={setState}
                                        value={artist}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                        <label>Canción</label>
                                        <input 
                                        type="text" 
                                        className="form-control"
                                        name="song"
                                        placeholder="Nombre de Canción"
                                        onChange={setState}
                                        value={song}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                            type="submit"
                            className="btn btn-primary float-right"
                            >CONSULTAR</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Form;