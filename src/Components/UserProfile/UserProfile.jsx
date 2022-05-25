import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import Head from "../Helper/Head/Head";

function UserProfile() {
  const { user } = useParams();

  return (
    <section className="container mainSection">
      <Head title={user} description="Nome do site dogs, perfil do usuário." />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
}

export default UserProfile;
