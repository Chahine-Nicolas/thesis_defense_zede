---
layout: page
title: Abstract
permalink: /progressivite/
sitemap: false
---

This thesis focuses on indexing and retrieval in 3D point clouds for large-scale place recognition, and more precisely on its acceleration. The objective is to search for point clouds similar to a query cloud in a database of georeferenced point clouds by establishing a representation of the point cloud and then searching for it in the database to obtain a list of nearest neighbors ranked by similarity according to distance metrics. 

State-of-the-art methods in place recognition from point clouds primarily focus on building representations of the cloud rather than on the efficient search for similar candidates. This second step typically relies on exhaustive search or better k-d trees, making it computationally expensive when the volume of the point cloud reference database increases or is inefficient in high dimensions. This is, however, a typical situation in current geographic information applications, such as large-scale place recognition or reference updates. In contrast, the literature on the subject, mainly in robotics, primarily focuses on loop closure scenarios, often limited to the scale of a street or neighborhood. To address this problem, we have chosen to draw inspiration from the state of the art in information retrieval. This thesis makes three contributions to the problem of large-scale place recognition, relying exclusively on the geometric information contained in point clouds.

Our first contribution, called DSI-3D, is based on the Differentiable Search Index (DSI) approach, which can generate identifiers for relevant documents in response to a textual query. To associate such indices with 3D data, we draw inspiration from Vision Transformers, such as GIT, which were originally designed for image captioning. By replacing its image encoder with a 3D encoder, our method learns to generate indices from point clouds, enabling similarity searches of point clouds in constant inference time. Several encoding strategies, some specialized for geolocation, have been studied and evaluated using the standard datasets from the state of the art in robotics (KITTI).

Our second contribution is the exploitation of LiDAR-based territorial mapping data, LiDAR HD from the IGN, for place recognition tasks. This dataset, present throughout the entire French territory, has acquisition characteristics that differ significantly from those of mobile mapping. The use of DSI-3D on this dataset thus required fine-tuning of the 3D encoder and adaptation strategies. To assess the generalization capability of DSI-3D, two areas of Paris were selected to form the new evaluation dataset.

Our final contribution explores two improvements for retrieval in 3D point clouds, aimed at scaling to larger areas and at improving the quality of the retrieval. First, we investigated a retrieval strategy based on Mixtures of Experts (MoE), which divides the model into distinct sub-models (experts), each specialized in a subset of the database. Second, we studied the application of a re-ranking mechanism to improve point cloud place recognition performance by re-ordering the list of candidates based on their local feature similarity.

This work is intended to open perspectives on improving large-scale retrieval in 3D point clouds for place recognition, particularly with regard to the use of generative search, while stimulating future research on the integration of multimodal methods for place recognition.
