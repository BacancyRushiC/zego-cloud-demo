import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const generateRoomID = () => {
  return `room-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
};

const ZegoCall = () => {
  const [searchParams] = useSearchParams();
  const roomID = searchParams.get("roomID") || generateRoomID();
  const elementRef = useRef<HTMLDivElement>(null);
  const zpRef = useRef<ReturnType<typeof ZegoUIKitPrebuilt.create> | null>(
    null
  );

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const appID = 1301514630;
    const serverSecret = "8957a8a49e8644f6fb948ee743b9b4f3";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Rushi"
    );

    if (!zpRef.current) {
      zpRef.current = ZegoUIKitPrebuilt.create(kitToken);
      zpRef.current.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: "Copy Link",
            url: `${window.location.origin}/call?roomID=${roomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
        layout: "Grid",
      });
    }

    return () => {
      if (zpRef.current) {
        zpRef.current.destroy();
        zpRef.current = null;
      }
    };
  }, [roomID]);

  return <div ref={elementRef} className="w-full h-screen bg-gray-900" />;
};

export default ZegoCall;
