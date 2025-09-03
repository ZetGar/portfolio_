"use client"; // Next.js 13+ app 디렉토리 사용 시 필요

import React, { useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const ArchitectureImage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* 썸네일 이미지 */}
      <Image
        src="/architecture.png"
        alt="Architecture"
        width={600}
        height={700}
        style={{ width: "100%", height: "100%", cursor: "pointer" }}
        onClick={() => setOpen(true)}
      />

      {/* 라이트박스 모달 */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: "/architecture.png" }]}
        plugins={[Zoom]}
      />
    </div>
  );
};

export default ArchitectureImage;
