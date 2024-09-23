'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import liff from "@line/liff";

export default function Home() {
  useEffect(()=>{
    liff
      .init({
        liffId: `${process.env.NEXT_PUBLIC_LIFF_ID}`, // Use own liffId
      })
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login({ redirectUri: window.location.href });
        } else {
          liff
            .shareTargetPicker(
              [
                {
                  type: "flex",
                  altText: "耶咿～～～",
                  contents: {
                    type: "bubble",
                    hero: {
                      type: "image",
                      url: "https://i.pinimg.com/564x/61/de/ba/61deba51ec625493d1956063bac219fb.jpg",
                      size: "full",
                      aspectRatio: "13:13",
                      aspectMode: "cover",
                      action: {
                        type: "uri",
                        uri: "https://www.google.com/",
                      },
                    },
                    body: {
                      type: "box",
                      layout: "vertical",
                      contents: [
                        {
                          type: "text",
                          text: "月圓你更圓～",
                          weight: "bold",
                          size: "xl",
                        },
                        {
                          type: "box",
                          layout: "baseline",
                          margin: "md",
                          contents: [
                            {
                              type: "icon",
                              size: "sm",
                              url: "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png",
                            },
                            {
                              type: "icon",
                              size: "sm",
                              url: "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png",
                            },
                            {
                              type: "icon",
                              size: "sm",
                              url: "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png",
                            },
                            {
                              type: "icon",
                              size: "sm",
                              url: "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png",
                            },
                            {
                              type: "icon",
                              size: "sm",
                              url: "https://developers-resource.landpress.line.me/fx/img/review_gray_star_28.png",
                            },
                            {
                              type: "text",
                              text: "4.0",
                              size: "sm",
                              color: "#999999",
                              margin: "md",
                              flex: 0,
                            },
                          ],
                        },
                        {
                          type: "box",
                          layout: "vertical",
                          margin: "lg",
                          spacing: "sm",
                          contents: [
                            {
                              type: "box",
                              layout: "baseline",
                              spacing: "sm",
                              contents: [
                                {
                                  type: "text",
                                  text: "Place",
                                  color: "#aaaaaa",
                                  size: "sm",
                                  flex: 1,
                                },
                                {
                                  type: "text",
                                  text: "Flex Tower, 7-7-4 Midori-ku, Tokyo",
                                  wrap: true,
                                  color: "#666666",
                                  size: "sm",
                                  flex: 5,
                                },
                              ],
                            },
                            {
                              type: "box",
                              layout: "baseline",
                              spacing: "sm",
                              contents: [
                                {
                                  type: "text",
                                  text: "Time",
                                  color: "#aaaaaa",
                                  size: "sm",
                                  flex: 1,
                                },
                                {
                                  type: "text",
                                  text: "10:00 - 23:00",
                                  wrap: true,
                                  color: "#666666",
                                  size: "sm",
                                  flex: 5,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    footer: {
                      type: "box",
                      layout: "vertical",
                      spacing: "sm",
                      contents: [
                        {
                          type: "button",
                          style: "link",
                          height: "sm",
                          action: {
                            type: "uri",
                            label: "test1",
                            uri: "https://www.google.com/",
                          },
                        },
                        {
                          type: "button",
                          style: "link",
                          height: "sm",
                          action: {
                            type: "uri",
                            label: "分享給好友",
                            uri: "https://liff.line.me/2006335810-vKOPO9eM",
                          },
                        },
                        {
                          type: "box",
                          layout: "vertical",
                          contents: [],
                          margin: "sm",
                        },
                      ],
                      flex: 0,
                    },
                  },
                },
              ],
              {
                isMultiple: true,
              }
            )
            .then(function (res) {
              if (res) {
                // succeeded in sending a message through TargetPicker
                console.log(`[${res.status}] Message sent!`);
              } else {
                const [majorVer, minorVer] = (
                  liff.getLineVersion() || ""
                ).split(".");
                if (parseInt(majorVer) == 10 && parseInt(minorVer) < 11) {
                  // LINE 10.3.0 - 10.10.0
                  // Old LINE will access here regardless of user's action
                  console.log(
                    "TargetPicker was opened at least. Whether succeeded to send message is unclear"
                  );
                } else {
                  // LINE 10.11.0 -
                  // sending message canceled
                  console.log("TargetPicker was closed!");
                }
              }
            })
            .catch(function (error) {
              // something went wrong before sending a message
              console.log("something wrong happen");
            });
        }
      })
      .catch((err) => {
        console.log(err.code, err.message);
      });
  },[])

  const handleShare = async () => {
    if (!liff.isLoggedIn()) {
      liff.login({ redirectUri: window.location.href });
    }
    console.log(liff.isApiAvailable("shareTargetPicker"));
    liff
      .shareTargetPicker(
        [
          {
            type: "flex",
            altText: "耶咿～～～",
            contents: {
              type: "bubble",
              hero: {
                type: "image",
                url: "https://i.pinimg.com/564x/61/de/ba/61deba51ec625493d1956063bac219fb.jpg",
                size: "full",
                aspectRatio: "13:13",
                aspectMode: "cover",
                action: {
                  type: "uri",
                  uri: "https://www.google.com/",
                },
              },
              body: {
                type: "box",
                layout: "vertical",
                contents: [
                  {
                    type: "text",
                    text: "月圓你更圓～",
                    weight: "bold",
                    size: "xl",
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    margin: "md",
                    contents: [
                      {
                        type: "icon",
                        size: "sm",
                        url: "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png",
                      },
                      {
                        type: "icon",
                        size: "sm",
                        url: "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png",
                      },
                      {
                        type: "icon",
                        size: "sm",
                        url: "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png",
                      },
                      {
                        type: "icon",
                        size: "sm",
                        url: "https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png",
                      },
                      {
                        type: "icon",
                        size: "sm",
                        url: "https://developers-resource.landpress.line.me/fx/img/review_gray_star_28.png",
                      },
                      {
                        type: "text",
                        text: "4.0",
                        size: "sm",
                        color: "#999999",
                        margin: "md",
                        flex: 0,
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "vertical",
                    margin: "lg",
                    spacing: "sm",
                    contents: [
                      {
                        type: "box",
                        layout: "baseline",
                        spacing: "sm",
                        contents: [
                          {
                            type: "text",
                            text: "Place",
                            color: "#aaaaaa",
                            size: "sm",
                            flex: 1,
                          },
                          {
                            type: "text",
                            text: "Flex Tower, 7-7-4 Midori-ku, Tokyo",
                            wrap: true,
                            color: "#666666",
                            size: "sm",
                            flex: 5,
                          },
                        ],
                      },
                      {
                        type: "box",
                        layout: "baseline",
                        spacing: "sm",
                        contents: [
                          {
                            type: "text",
                            text: "Time",
                            color: "#aaaaaa",
                            size: "sm",
                            flex: 1,
                          },
                          {
                            type: "text",
                            text: "10:00 - 23:00",
                            wrap: true,
                            color: "#666666",
                            size: "sm",
                            flex: 5,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              footer: {
                type: "box",
                layout: "vertical",
                spacing: "sm",
                contents: [
                  {
                    type: "button",
                    style: "link",
                    height: "sm",
                    action: {
                      type: "uri",
                      label: "test1",
                      uri: "https://www.google.com/",
                    },
                  },
                  {
                    type: "button",
                    style: "link",
                    height: "sm",
                    action: {
                      type: "uri",
                      label: "分享給好友",
                      uri: "https://liff.line.me/2006335810-vKOPO9eM",
                    },
                  },
                  {
                    type: "box",
                    layout: "vertical",
                    contents: [],
                    margin: "sm",
                  },
                ],
                flex: 0,
              },
            },
          },
        ],
        {
          isMultiple: true,
        }
      )
      .then(function (res) {
        if (res) {
          // succeeded in sending a message through TargetPicker
          console.log(`[${res.status}] Message sent!`);
        } else {
          const [majorVer, minorVer] = (liff.getLineVersion() || "").split(".");
          if (parseInt(majorVer) == 10 && parseInt(minorVer) < 11) {
            // LINE 10.3.0 - 10.10.0
            // Old LINE will access here regardless of user's action
            console.log(
              "TargetPicker was opened at least. Whether succeeded to send message is unclear"
            );
          } else {
            // LINE 10.11.0 -
            // sending message canceled
            console.log("TargetPicker was closed!");
          }
        }
      })
      .catch(function (error) {
        // something went wrong before sending a message
        console.log("something wrong happen");
      });
  };
  return (
    <div>
      <button onClick={handleShare}>SHARE</button>
    </div>
  );
}
