package com.emosaac.server.controller;

import com.emosaac.server.common.CommonResponse;
import com.emosaac.server.config.s3.S3Uploader;
import com.emosaac.server.security.CurrentUser;
import com.emosaac.server.security.UserPrincipal;
import com.emosaac.server.service.OcrService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

import java.io.IOException;

@RestController
@RequestMapping("/api/ocr")
@RequiredArgsConstructor
@Api(tags = {"OCR 컨트롤러"})
public class OcrController {

    private final OcrService ocrService;

    @PostMapping()
    @ApiOperation(value = "OCR인식할 사진 등록", notes = "사진을 등록하면 문자열 반환")
    public ResponseEntity<CommonResponse> getCurrentUser(@ApiIgnore @CurrentUser UserPrincipal userPrincipal, @RequestParam("file") MultipartFile multipartFile) throws IOException {

        return ResponseEntity.ok().body(CommonResponse.of(
                HttpStatus.OK, "ocr 텍스트 조회 성공", ocrService.detectTextGcs(multipartFile)));
    }

}
