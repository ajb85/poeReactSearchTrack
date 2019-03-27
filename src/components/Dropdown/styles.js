export default `.dropdown button {
  width: 200px;
  height: 40px;
  background-color: #4c474b;
  color: #90ada5;
  border: 1px solid #90ada5;
  padding: 0;
  margin-bottom: 20px;
  transition: 0.1s;
}
.dropdown button i {
  float: right;
  padding-right: 10px;
  transition: 0.25s;
}

.dropdown button i.rotated {
  transform: rotate(90deg);
  transform-origin: 24% 40%;
}

.dropdown button:hover {
  background-color: #423e41;
}
.dropdown button:active {
  background-color: #2b282a;
  transform: translateY(1px);
}`;
