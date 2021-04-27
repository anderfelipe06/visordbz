var g = 9.80;

  function calc()
  {
      var f1 = parseInt(document.getElementById('f').value);
      var a1 = parseInt(document.getElementById('a').value);
      var r = f1 * g * a1;

      document.getElementById('result').innerHTML = r;

      if (r < 8000)
      {
        document.getElementById('resp02').src = "https://pa1.narvii.com/6283/75f9336483ef68bdd281960ed8d6122b10a7027a_hq.gif";
        document.getElementById('resp').innerHTML = 'Abaixo de 8000';

      }
        else if (r >= 8000)
        {
          document.getElementById('resp02').src = "https://pa1.narvii.com/6204/3dec1b6313aed4f8ae225680c4dd20bcc4ddc50c_hq.gif";
          document.getElementById('resp').innerHTML = 'Acima de 8000';
        }
          else
          {
            document.getElementById('result').innerHTML = '#Error';
            document.getElementById('resp02').src = "https://media.tenor.com/images/20f83baefadb65a757acda491b26ca8c/tenor.gif";
            document.getElementById('resp').innerHTML = " ";

          }

  }

  function checkForce()
  {
    var forceJs = document.getElementById('f').value;

    if (forceJs.length <= 0)
    {
      document.getElementById('resp').innerHTML = "O campo força não pode ser em branco.";
      document.getElementById('resp02').src = "";
      document.getElementById('result').innerHTML = '#Error';
    }
      else
      {
          document.getElementById('result').innerHTML = 'Força: ' + forceJs;
          document.getElementById('resp').innerHTML = "";

      }
  }

  function checkHeight()
  {
    var heightJs = document.getElementById('a').value;

    if (heightJs.length <= 0)
    {
      document.getElementById('resp').innerHTML = "O campo altura não pode ser em branco.";
      document.getElementById('resp02').src = "";
      document.getElementById('result').innerHTML = '#Error';
    }
      else
      {
          document.getElementById('result').innerHTML = 'Altura: ' + heightJs;
          document.getElementById('resp').innerHTML = "";

      }
  }