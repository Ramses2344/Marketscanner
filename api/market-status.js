export default async function handler(req, res) {
  try {
    // BTC data ophalen
    const btcRes = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true"
    );
    const btcData = await btcRes.json();

    // Fear & Greed ophalen
    const fgRes = await fetch("https://api.alternative.me/fng/");
    const fgData = await fgRes.json();

    const btcChange = btcData.bitcoin.usd_24h_change;
    const btcPrice = btcData.bitcoin.usd;
    const fearGreed = parseInt(fgData.data[0].value);

    // LOGICA
    let bias = "Neutral";
    if (btcChange > 0 && fearGreed > 55) bias = "Bullish";
    else if (btcChange < 0 && fearGreed < 45) bias = "Bearish";

    let momentum = Math.abs(btcChange) > 2 ? "Strong" : "Weak";

    let risk = "Medium";
    if (fearGreed > 75) risk = "High";
    else if (fearGreed < 45) risk = "Low";

    let action = "Wait";
    if (bias === "Bullish" && momentum === "Strong" && risk !== "High") {
      action = "Trade";
    }

    res.status(200).json({
      bias,
      momentum,
      risk,
      action,
      btcPrice,
      btcChange,
      fearGreed,
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}
