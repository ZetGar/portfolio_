"use client";

import React, { useState } from "react";
import { data } from "./data/data";
import styles from "../page.module.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Image from "next/image";

export default function Page() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleImageClick = (images: string[], index: number) => {
    setSelectedImages(images);
    setSelectedImageIndex(index);
  };
  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h2>{data.title}</h2>
      </div>

      {data.preview && (
        <div className={styles.appDownloadWrap}>
          {data.preview.content.map((previewDownload, index) => (
            <a href={previewDownload} key={`preview_${index}`}>
              {index === 0 ? "구글플레이 다운로드" : "애플스토어 다운로드"}
            </a>
          ))}
        </div>
      )}

      <div className={styles.descriptionWrap}>
        {data.description.map((desc, idx) => (
          <div key={idx} className={styles.description}>
            <p>{desc.title}</p>

            <div>
              {desc.content.map((c, index) => (
                <div key={`content_${index}`} className={styles.contentWrap}>
                  <p>{c.title}</p>
                  <div>
                    {c.content.map((content, cindex) => (
                      <div
                        key={`cindex_${cindex}`}
                        className={styles.textAndImage}
                      >
                        <p>· {content}</p>

                        {c.img &&
                          cindex === c.content.length - 1 && ( // 문장 끝나고 이미지 보여주기
                            <div className={styles.thumbnailWrap}>
                              {c.img.map((image, imgIndex) => (
                                <div
                                  key={`img_${imgIndex}`}
                                  className={styles.thumbnail}
                                  onClick={() =>
                                    handleImageClick(c.img!, imgIndex)
                                  }
                                >
                                  <Image
                                    src={image}
                                    alt={desc.title}
                                    width={200}
                                    height={200}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover",
                                    }}
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {selectedImageIndex !== null && (
          <Lightbox
            open={true}
            close={() => setSelectedImageIndex(null)}
            index={selectedImageIndex}
            slides={selectedImages.map((img) => ({ src: img }))}
            plugins={[Zoom]}
          />
        )}
      </div>
    </div>
  );
}
