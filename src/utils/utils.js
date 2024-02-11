export const LinksArray = [
    { route: "/", name: "Dashboard" },
    { route: "/category/Bills&Payments", name: "Bills and Payments" },
    { route: "/category/Entertainment", name: "Entertainment" },
    { route: "/category/Food", name: "Food" },
    { route: "/expenses", name: "Expenses" },
    { route: "/stats", name: "My Stats" },
  ];

  export  const 
  formattedDate = () => {
    const date = new Date();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();

    return `${month} ${day}`;
  };
 export  const formattedCreditDate = (date) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const [_, month, day] = date.split("-");
    return `${
      monthNames[Number(month.toString().replace("0", "")) - 1]
    } ${day} `;
  };
