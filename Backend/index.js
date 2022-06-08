const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

const userRouter = require("./routers/userRouter");
const equipmentRouter = require("./routers/equipmentRouter");
const orderRouter = require("./routers/orderRouter");
const utilRouter = require("./routers/utils");

const stripe_sk =
  "sk_test_51L19xwSJzBaIo7nUgoRoSILj7wsJDvHYAg8yhp0yiMyt04CDL54fqCMuA6OHk1qPI72MQXpD1vzeyD3BqFP3EkRY00Vzej716B";
const stripe = require("stripe")(stripe_sk);

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(express.static("./static"));
app.use(express.json());
app.use("/user", userRouter);
app.use("/equipment", equipmentRouter);
app.use("/order", orderRouter);
app.use("/util", utilRouter);

app.post("/create-payment-intent", async (req, res) => {
  const data = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: data.amount,
    currency: "inr",
  });
  res.status(200).json(paymentIntent);
});

app.listen(port, () => {
  console.log("my major server is started");
});
