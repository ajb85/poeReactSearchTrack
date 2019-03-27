export default `
@keyframes loadButtons {
  from {
    right: -75px;
  }
  to {
    right: 2px;
  }
}
  .buttons {
    background-color: #575456;
    color: #90ada5;
    border: 1px solid #cec59f;
    position: fixed;
    right: 2px;
    z-index: 1000;
    font-size: 18px;
    width: 60px;
    animation: loadButtons 0.25s both;
    animation-delay: 1s;
  }

  .buttons:hover {
    background-color: #302e2f;
  }

  .buttons:active {
    transform: translateY(1px);
    outline-color: #90ada5;
  }

  .switch {
    top: 5%;
  }

  .new {
    top: 11%;
  }

  .save {
    top: 17%;
  }`;
