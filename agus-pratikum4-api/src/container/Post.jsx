import React from "react";

const Post = (props) => {
        return(
            <div className="post-artikel">
                <div className="artikel">
                    <div className="gambar-artikel">
                        <img src="http://placeimg.com/80/80/nature" alt="Gambar Tumbnail Artikel"/>
                    </div>
                    <div className="konten-artikel">
                        <div className="judul-artikel">{props.NIM}</div>
                        <div className="judul-artikel">{props.nama}</div>
                        <div className="judul-artikel">{props.alamat}</div>
                        <div className="judul-artikel">{props.hp}</div>
                        <div className="judul-artikel">{props.angkatan}</div>
                        <div className="judul-artikel">{props.status}</div>
                        <p className="isi-artikel">{props.isi}</p>
                        <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
                    </div>
                </div>
            </div>
        )
    }

export default Post;