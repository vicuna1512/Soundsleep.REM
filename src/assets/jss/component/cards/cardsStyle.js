const cardsStyle = {
  card: {
    border: "2px",
    marginTop: "10vh",
    marginLeft: "40vw",
    borderRadius: "6px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "coral",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear",
    width:"20vw",
    
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardCarousel: {
    overflow: "hidden"
  },
  cardBody: {
    padding: "0.9375rem 1.875rem",
    flex: "1 1 auto",
  },
  cardFooter: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "orange",
    padding: "0.9375rem 1.875rem",
  },
  cardHeader: {
    borderRadius: "9px",
    padding: "0.5rem 15px",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    border: "0",
    marginBottom: "0",
    background: "orange"
    
  },
  cardHeaderPlain: {
    marginLeft: "0px",
    marginRight: "0px",
  },
};

export default cardsStyle;
