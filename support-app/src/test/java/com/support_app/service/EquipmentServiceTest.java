package com.support_app.service;

import com.support_app.dto.CreateEquipmentDto;
import com.support_app.dto.UpdateEquipmentStatusDto;
import com.support_app.mapper.EquipmentMapper;
import com.support_app.model.Equipment;
import com.support_app.model.RegularUser;
import com.support_app.repository.EquipmentRepository;
import com.support_app.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class EquipmentServiceTest {

    @Mock
    private EquipmentRepository equipmentRepository;

    @Mock
    private UserRepository userRepository;

    @Mock
    private EquipmentMapper equipmentMapper;

    @InjectMocks
    private EquipmentService equipmentService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void addEquipment() {
        // Arrange
        Long userId = 1L;
        RegularUser user = new RegularUser();
        user.setId(userId);
        CreateEquipmentDto dto = new CreateEquipmentDto();
        dto.setUserId(userId);
        Equipment equipment = new Equipment();

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(equipmentMapper.fromCreateDtoToEquipment(dto, user)).thenReturn(equipment);
        when(equipmentRepository.save(equipment)).thenReturn(equipment);

        // Act
        Equipment result = equipmentService.addEquipment(dto);

        // Assert
        assertNotNull(result);
        assertEquals(equipment, result);
        verify(userRepository, times(1)).findById(userId);
        verify(equipmentMapper, times(1)).fromCreateDtoToEquipment(dto, user);
        verify(equipmentRepository, times(1)).save(equipment);
    }

    @Test
    void updateEquipment() {
        // Arrange
        Long equipmentId = 1L;
        UpdateEquipmentStatusDto dto = new UpdateEquipmentStatusDto();
        dto.setId(equipmentId);
        Equipment existingEquipment = new Equipment();
        existingEquipment.setId(equipmentId);
        Equipment updatedEquipment = new Equipment();
        updatedEquipment.setId(equipmentId);

        when(equipmentRepository.findById(equipmentId)).thenReturn(Optional.of(existingEquipment));
        doNothing().when(equipmentMapper).updateEquipmentStatusDtoToEquipment(dto, existingEquipment);
        when(equipmentRepository.save(existingEquipment)).thenReturn(updatedEquipment);

        // Act
        Equipment result = equipmentService.updateEquipmentStatus(dto);

        // Assert
        assertNotNull(result);
        assertEquals(updatedEquipment, result);
        verify(equipmentRepository, times(1)).findById(equipmentId);
        verify(equipmentMapper, times(1)).updateEquipmentStatusDtoToEquipment(dto, existingEquipment);
        verify(equipmentRepository, times(1)).save(existingEquipment);
    }

    @Test
    void deleteEquipment() {
        // Arrange
        Long equipmentId = 1L;
        Equipment equipment = new Equipment();
        equipment.setId(equipmentId);

        when(equipmentRepository.findById(equipmentId)).thenReturn(Optional.of(equipment));
        doNothing().when(equipmentRepository).delete(equipment);

        // Act
        equipmentService.deleteEquipment(equipmentId);

        // Assert
        verify(equipmentRepository, times(1)).findById(equipmentId);
        verify(equipmentRepository, times(1)).delete(equipment);
    }

    @Test
    void getAllEquipments() {
        // Arrange
        Equipment equipment1 = new Equipment();
        Equipment equipment2 = new Equipment();
        List<Equipment> equipmentList = Arrays.asList(equipment1, equipment2);

        when(equipmentRepository.findAll()).thenReturn(equipmentList);

        // Act
        List<Equipment> result = equipmentService.getAllEquipments();

        // Assert
        assertNotNull(result);
        assertEquals(2, result.size());
        assertTrue(result.contains(equipment1));
        assertTrue(result.contains(equipment2));
        verify(equipmentRepository, times(1)).findAll();
    }

    @Test
    void getAllEquipmentsByUser() {
        // Arrange
        RegularUser user = new RegularUser();
        Equipment equipment1 = new Equipment();
        Equipment equipment2 = new Equipment();
        List<Equipment> equipmentList = Arrays.asList(equipment1, equipment2);

        when(equipmentRepository.findEquipmentByUser(user)).thenReturn(equipmentList);

        // Act
        List<Equipment> result = equipmentService.getAllEquipmentsByUser(user);

        // Assert
        assertNotNull(result);
        assertEquals(2, result.size());
        assertTrue(result.contains(equipment1));
        assertTrue(result.contains(equipment2));
        verify(equipmentRepository, times(1)).findEquipmentByUser(user);
    }

    @Test
    void getEquipmentById() {
        // Arrange
        Long equipmentId = 1L;
        Equipment equipment = new Equipment();
        equipment.setId(equipmentId);

        when(equipmentRepository.findById(equipmentId)).thenReturn(Optional.of(equipment));

        // Act
        Equipment result = equipmentService.getEquipmentById(equipmentId);

        // Assert
        assertNotNull(result);
        assertEquals(equipment, result);
        verify(equipmentRepository, times(1)).findById(equipmentId);
    }
}
