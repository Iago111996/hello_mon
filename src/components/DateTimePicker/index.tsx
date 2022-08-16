import React from "react";
import moment from "moment";
import { TouchableOpacityProps } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Container, Title, Text, Section } from "./styles";

interface DateTimePickerProps extends TouchableOpacityProps {
  title: string;
  intialDate: Date;
  isDatePickerVisible: boolean;
  mode: "date" | "time" | "datetime";
  getData: (date: Date) => void;
  showDatePicker: () => void;
  hideDatePicker: () => void;
}

export function DateTimePicker({
  mode,
  title,
  intialDate,
  isDatePickerVisible,
  showDatePicker,
  hideDatePicker,
  getData,
  ...rest
}: DateTimePickerProps) {
  const handleConfirm = (date: Date) => {
    getData(date);
    hideDatePicker();
  };

  return (
    <Section>
      <Title>{title}</Title>

      <Container onPress={showDatePicker} {...rest}>
        <Text>{moment(intialDate).format("LL")}</Text>

        <DateTimePickerModal
          mode={mode}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          isVisible={isDatePickerVisible}
        />
      </Container>
    </Section>
  );
}
