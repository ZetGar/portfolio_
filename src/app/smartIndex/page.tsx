"use client";

import React, { useState } from "react";
import Image from "next/image";
import { data } from "./data/data";
import styles from "../page.module.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export default function SmartIndexPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
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

      <div className={styles.descriptionWrap}>
        {data.description.map((description, descIndex) => (
          <div key={`description_${descIndex}`} className={styles.description}>
            <p>{description.title}</p>
            <div>
              <p>{description.content}</p>

              {description.img && (
                <div className={styles.thumbnailWrap}>
                  {description.img.map((image, imgIndex) => (
                    <div
                      key={`img_${imgIndex}`}
                      className={styles.thumbnail}
                      onClick={() => handleImageClick(description.img!, imgIndex)}
                    >
                      <Image
                        src={image}
                        alt={description.title}
                        width={200}
                        height={200}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {data.preview && (
          <div className={styles.description}>
            <p>PREVIEW</p>
            <div>
              <p>{data.preview.content}</p>
              <div className={styles.preview}>
                <iframe src={data.preview.link} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <Lightbox
          open={selectedImageIndex !== null}
          close={() => setSelectedImageIndex(null)}
          index={selectedImageIndex}
          slides={selectedImages.map((img) => ({ src: img }))}
          plugins={[Zoom]}
        />
      )}
    </div>
  );
}
