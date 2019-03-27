export default `.saveWindow {
  position: fixed;
  top: 15%;
  right: -294px;
  font-family: "Oswald", sans-serif;
  width: 250px;
  min-height: 350px;
  margin: auto;
  background-color: #575456;
  border: 2px solid white;
  border-radius: 10px;
  color: #bf9b82;
  padding: 20px;
  box-shadow: 7px 7px 10px #aaa;
  z-index: 1001;
}

@keyframes hideSave {
  from {
    right: -50px;
  }
  to {
    right: -294px;
  }
}
@keyframes showSave {
  to {
    right: -50px;
  }
}
.saveWindow.hide {
  animation: hideSave 0.5s both;
}
.saveWindow.show {
  animation: showSave 0.5s both;
}
h2 {
  margin-bottom: 10px;
  font-size: 2.5rem;
  font-weight: 800;
  color: #cec59f;
}
i.close {
  position: absolute;
  right: 65px;
  top: 15px;
  font-size: 22px;
}
i.close:hover {
  color: #cb8371;
}
i.close:active {
  color: #888;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  margin-top: 20px;
}
input {
  margin-bottom: 10px;
  height: 30px;
}
p {
  font-size: 1.3rem;
  margin-bottom: 10px;
}
button.saveLink {
  background-color: #d64f5a;
  border: 1px solid black;
  width: 200px;
  min-height: 35px;
  transition: 0.25s;
}
button.saveLink:hover {
  background-color: #a83e47;
  color: #cb8371;
}
button.saveLink:focus {
  background-color: #020f1a;
}
`;
