export default `.container {
  position: absolute;
  right: 265px;
  top: -70px;
  max-height: 340px;
  max-width: 190px;
  padding: $padding 0;
  border-radius: 10px;
  transition: 0.15s;
  display: flex;
  align-items: center;
  background-color: #242123;
}

.container.inactive {
  opacity: 0;
  visibility: hidden;
}

.scrollMenu {
  padding: 5px 0;
  text-align: right;
  max-height: 300px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  direction: rtl;
}
.scrollMenu::-webkit-scrollbar {
  width: 5px;
}

.scrollMenu::-webkit-scrollbar-thumb {
  background: #90ada5;
}

p.item {
  white-space: nowrap;
  cursor: pointer;
  margin-bottom: 0px;
  padding: 10px 14.3px;
}
p.item:hover {
  text-decoration: underline;
}

p.item:first-of-type {
  padding-top: 0px;
}

p.item:last-of-type {
  padding-bottom: 0px;
}

.arrow {
  position: absolute;
  right: -20px;
  top: 21px;

  border: 10px solid transparent;
  border-left: 10px solid #242123;
  width: 0;
  height: 0;
}
`;
