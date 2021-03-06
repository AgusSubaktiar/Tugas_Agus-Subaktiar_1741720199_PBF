import React, {Component} from "react";
import './BlogPost.css';
import Post from './Post';

class Blogpost extends Component{
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            id: 1,
            NIM: 1,
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }

    ambilDataDariServerAPI=()=> {
        fetch('http://localhost:3001/mahasiswa?_sort=nama&_order=desc')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listMahasiswa: jsonHasilAmbilDariAPI
            })
        })
    }
      
    componentDidMount(){
        this.ambilDataDariServerAPI()
       
    }
    handleHapusMahasiswa = (data) =>{
        fetch(`http://localhost:3001/mahasiswa/${data}`, {method: 'DELETE'})
        .then(res => { this.ambilDataDariServerAPI()
        })
    }
    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = {...this.state.insertMahasiswa};
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa',{
            method:'post',
            headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })
        .then((Response) => {
            this.ambilDataDariServerAPI();
        });
    }
    render() {
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                <h2>Tambah Mahasiswa: </h2>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="NIM" name="NIM" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="alamat" name="alamat" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">HP</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="hp" name="hp" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="status" name="status" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                        
                    <button type="submit" className="btn btn-success" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Mahasiswa: </h2>
                {
                    this.state.listMahasiswa.map(mahasiswa => {
                        return <Post key={mahasiswa.id} nim={mahasiswa.NIM} nama={mahasiswa.nama} alamat={mahasiswa.alamat} hp={mahasiswa.hp} angkatan={mahasiswa.angkatan} status={mahasiswa.status} idMahasiswa={mahasiswa.id} hapusMahasiswa={this.handleHapusMahasiswa }/>
                    })
                }
        </div>
        )
    }
}

export default Blogpost;