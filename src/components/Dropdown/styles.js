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
  transition: 0.1s;
}

.dropdown button i.rotated {
  transform: rotate(90deg);
  transform-origin: 50% 50%;
}

.dropdown button .whiteSpace {
  width: 10px;
  min-height: 1px;
  float: right;
  display:inline-block;
}

.dropdown button:hover {
  background-color: #423e41;
}
.dropdown button:active {
  background-color: #2b282a;
  transform: translateY(1px);
}`;
