package com.support_app.service;

import com.support_app.dto.CreateDefectDto;
import com.support_app.dto.UpdateDefectDto;
import com.support_app.enums.DefectPriority;
import com.support_app.enums.DefectType;
import com.support_app.mapper.DefectMapper;
import com.support_app.model.Defect;
import com.support_app.repository.DefectRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class DefectServiceTest {

    @Mock
    private DefectRepository defectRepository;

    @Mock
    private DefectMapper defectMapper;

    @InjectMocks
    private com.support_app.service.DefectService defectService;

    private Defect defect;
    private CreateDefectDto createDefectDto;
    private UpdateDefectDto updateDefectDto;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);

        // Initialize test data
        defect = new Defect();
        defect.setId(1L);
        createDefectDto = new CreateDefectDto();
        createDefectDto.setType(DefectType.OTHER);
        createDefectDto.setPriority(DefectPriority.LOW);
        createDefectDto.setDescription("Description A");
        updateDefectDto = new UpdateDefectDto();
        updateDefectDto.setId(1L);
        updateDefectDto.setType(DefectType.NETWORK);
        updateDefectDto.setPriority(DefectPriority.HIGH);
        updateDefectDto.setDescription("Description B");
    }

    @Test
    void getAllDefects() {
        when(defectRepository.findAll()).thenReturn(List.of(defect));

        List<Defect> defects = defectService.getAllDefects();

        assertNotNull(defects);
        assertFalse(defects.isEmpty());
        assertEquals(1, defects.size());
        assertEquals(defect, defects.get(0));

        verify(defectRepository, times(1)).findAll();
    }

    @Test
    void addDefect() {
        when(defectMapper.fromCreateDto(createDefectDto)).thenReturn(defect);
        when(defectRepository.save(defect)).thenReturn(defect);

        Defect result = defectService.addDefect(createDefectDto);

        assertNotNull(result);
        assertEquals(defect, result);

        verify(defectMapper, times(1)).fromCreateDto(createDefectDto);
        verify(defectRepository, times(1)).save(defect);
    }

    @Test
    void updateDefect() {
        when(defectRepository.findById(updateDefectDto.getId())).thenReturn(Optional.of(defect));
        doNothing().when(defectMapper).updateDefectFromDto(updateDefectDto, defect);
        when(defectRepository.save(defect)).thenReturn(defect);

        Defect result = defectService.updateDefect(updateDefectDto);

        assertNotNull(result);
        assertEquals(defect, result);

        verify(defectRepository, times(1)).findById(updateDefectDto.getId());
        verify(defectMapper, times(1)).updateDefectFromDto(updateDefectDto, defect);
        verify(defectRepository, times(1)).save(defect);
    }

    @Test
    void deleteDefect() {
        when(defectRepository.findById(defect.getId())).thenReturn(Optional.of(defect));

        defectService.deleteDefect(defect.getId());

        verify(defectRepository, times(1)).findById(defect.getId());
        verify(defectRepository, times(1)).delete(defect);
    }
}
