import React from 'react';
import $ from 'jquery';

export default class Taches extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true
    };
  }

async componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    const response = await fetch(url);
    const data = await response.json();

    this.sauvegarde(data);
    }

    sauvegarde(data)
    {
      for(var i=0;i<200;i++)
      {

          localStorage.setItem("completed"+i.toString(),JSON.stringify(data[i].completed));
          localStorage.setItem("id"+i.toString(),JSON.stringify(data[i].id));
          localStorage.setItem("title"+i.toString(),JSON.stringify(data[i].title));
          localStorage.setItem("userId"+i.toString(),JSON.stringify(data[i].userId));
        
      }
    }


    ChargerUneData(i)
    {
      var title = JSON.parse(localStorage.getItem("title"+i.toString()));
      var completed = JSON.parse(localStorage.getItem("completed"+i.toString()));
      var id = JSON.parse(localStorage.getItem("id"+i.toString()));
      var userid = localStorage.getItem("userId"+i.toString());
      var tache = [completed, id, title, userid];
      return tache;
    }


    ObternirLaListeDeData(){
      var liste = [];
      for(var i = 0; i < 200; i++)
      {
        liste[i] = this.ChargerUneData(i);
      }
      console.log(liste)
      return liste;
    }
    
    AfficherlisteComplete()
    {
        var liste = [];
        liste = this.ObternirLaListeDeData();

        console.table(liste);
        for(var i=0;i<200;i++)
        {
          var ligne = document.createElement("tr");
          var userid = document.createElement("td");
          userid.innerHTML = liste[i][3];
          var id = document.createElement("td");
          id.innerHTML = liste[i][1];
          var completed = document.createElement("td");
          completed.innerHTML = liste[i][0];
          var title = document.createElement("td");
          title.innerHTML = liste[i][2];
          ligne.appendChild(userid);
          ligne.appendChild(id);
          ligne.appendChild(completed);
          ligne.appendChild(title);
          $("#test").append(ligne);
        }
    }
  
    render() {
        return (
          <div>
            <table id="table">
              <thead>
                <tr>
                  <th>UserId</th>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Completed?</th>
                </tr>
              </thead>

              <tbody id ="test" >
              </tbody>
              
            </table>
            {this.AfficherlisteComplete()}
          </div>
        );
      }
    }