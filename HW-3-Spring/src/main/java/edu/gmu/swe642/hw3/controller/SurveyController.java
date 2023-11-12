package edu.gmu.swe642.hw3.controller;

import edu.gmu.swe642.hw3.entity.Survey;
import edu.gmu.swe642.hw3.repository.SurveyRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/surveys")
public class SurveyController {
    private final SurveyRepository surveyRepository;

    public SurveyController(SurveyRepository surveyRepository) {
        this.surveyRepository = surveyRepository;
    }

    @PostMapping
    public Survey saveSurvey(@RequestBody Survey survey) {
        try {
            return surveyRepository.save(survey);
        } catch (Throwable t) {
            throw t;
        }
    }

    @GetMapping
    public List<Survey> getAllSurveys() {
        return surveyRepository.findAll();
    }
}

