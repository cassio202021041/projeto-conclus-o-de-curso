package br.com.lojacursos.projetojavaloja.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.lojacursos.projetojavaloja.model.Video;
import br.com.lojacursos.projetojavaloja.repository.VideoRepository;

@Service
public class VideoService {
    @Autowired
    private VideoRepository videoRepository;

    public List<Video> getAllVideos() {
        return videoRepository.findAll();
    }

    public Video createVideo(Video video) {
        return videoRepository.save(video);
    }

    public Video updateVideo(Long id, Video video) {
        if (!videoRepository.existsById(id)) {
            return null;
        }
        video.setId(id);
        return videoRepository.save(video);
    }

    public boolean deleteVideo(Long id) {
        if (!videoRepository.existsById(id)) {
            return false;
        }
        videoRepository.deleteById(id);
        return true;
    }

}
